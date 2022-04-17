import { sendEmailVerification } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../../Login/SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  // const [displayName, setDisplayName] = useState("");

  const [terms, setTerms] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, errorCreating] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, errorUpdating] = useUpdateProfile(auth);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  if (user) {
    console.log(user);
    navigate("/home");
  }

  return (
    <div>
      <div className="d-md-flex justify-content-center">
        <Form onSubmit={handleSubmit} className="p-3">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type="text"
              placeholder="Enter Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Accept Terms and condition"
              onClick={() => setTerms(!terms)}
              className={terms ? "" : "text-danger"}
            />
          </Form.Group>
          <div className="text-danger my-2">
            {errorCreating?.message || errorUpdating?.message}
          </div>
          <div className="d-flex justify-content-center my-2">
            {loading || updating ? <Loading /> : ""}
          </div>

          <div className="d-flex justify-content-center">
            <Button
              disabled={!terms}
              className="w-100"
              variant="success rounded-pill"
              type="submit"
            >
              Register
            </Button>
          </div>
          <div className="mt-4">
            <small>
              Already have an account?
              <Link style={{ textDecoration: "none" }} to="/login">
                <strong className="text-success"> Login</strong>
              </Link>
            </small>
          </div>
        </Form>
      </div>
      <div className="d-flex justify-content-center">
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
