import React from "react";
import { Button, Spinner } from "react-bootstrap";
import googleLogo from "../../../images/googleLogo.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorMsg;
  let loadingAnimation;
  if (error) {
    errorMsg = <p>{error?.message}</p>;
  }
  if (loading) {
    loadingAnimation = <Spinner></Spinner>;
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-75 bg-secondary" />
        <span className="px-3">OR</span>
        <div style={{ height: "1px" }} className="w-75 bg-secondary" />
      </div>
      <h5 className="mt-2 text-center">Social Login</h5>
      <div className="text-danger">{errorMsg}</div>
      <div>{loadingAnimation}</div>
      <div className="d-flex justify-content-center">
        <Button variant="dark rounded-pill" onClick={() => signInWithGoogle()}>
          <img src={googleLogo} alt="" />
          <span>Sign in using Google</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
