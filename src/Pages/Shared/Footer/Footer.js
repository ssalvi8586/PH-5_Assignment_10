import React from "react";

const Footer = () => {
  return (
    <div className="d-flex justify-content-center mt-2">
      <small>All right reserved by SSA &copy;{new Date().getFullYear()}</small>
    </div>
  );
};

export default Footer;
