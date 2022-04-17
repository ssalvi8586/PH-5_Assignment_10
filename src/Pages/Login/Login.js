import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  const [user, loading, error] = useAuthState(auth);

  const [
    signInWithEmailAndPassword,
    userEmailSignIn,
    loadingEmailSignIn,
    errorEmailSignin,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sendingPassReset, errorPassReset] =
    useSendPasswordResetEmail(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const handlePassReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      if (errorPassReset) {
        toast.error(errorPassReset.message);
      } else {
        toast.success("Email sent");
      }
    } else {
      toast.warn("Email required");
    }
  };

  if (userEmailSignIn || user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-md-flex justify-content-center">
        <Form onSubmit={handleSubmit} className="p-3 px-md-0">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <div className="text-danger my-2">
            {errorEmailSignin?.message ||
              errorPassReset?.message ||
              error?.message}
          </div>
          <div className="d-flex justify-content-center my-2">
            {loadingEmailSignIn || loading ? <Loading /> : ""}
          </div>

          <div className="d-flex justify-content-center">
            <Button
              className="w-100"
              variant="success rounded-pill"
              type="submit"
            >
              Login
            </Button>
          </div>
          <div className="mt-4">
            <Button
              className="m-0 p-0"
              variant="link"
              style={{ textDecoration: "none" }}
              onClick={handlePassReset}
            >
              <strong className="text-warning">Forgot Password?</strong>
            </Button>
          </div>
          <div className="d-flex justify-content-center my-2">
            {sendingPassReset ? <Loading /> : ""}
          </div>
          <div className="mt-2">
            <small>
              New Here?{" "}
              <Link style={{ textDecoration: "none" }} to="/register">
                <strong className="text-success">Register</strong>
              </Link>
            </small>
          </div>
        </Form>
      </div>
      <div className="d-flex justify-content-center">
        <SocialLogin></SocialLogin>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
