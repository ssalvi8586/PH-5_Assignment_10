import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  };

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
    </div>
  );
};

export default Login;
