import React, { useState } from "react";
import InputType from "./InputType";

const Form = ({formTitle, submitButton}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <InputType
          label={"E-mail"}
          labelFor={"forEmail"}
          type={"email"}
          name={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputType
          label={"Password"}
          labelFor={"forPassword"}
          type={"password"}
          name={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="d-flex">
            <button className="btn btn-primary" type="submit">
              {submitButton}
            </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
