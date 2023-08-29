import React from "react";
import Form from "../../components/shared/Form/Form";

const Login = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src="./assets/images/banner1.jpg" alt="login_image"></img>
        </div>
        <div className="col-md-4 form-container">
          <Form formTitle={"Login Page"} submitButton={"Login"} />
        </div>
      </div>
    </>
  );
};

export default Login;
