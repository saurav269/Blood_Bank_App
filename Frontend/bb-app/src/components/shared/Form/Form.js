import React, { useState } from "react";
import InputType from "./InputType";

const Form = ({ formType, formTitle, submitButton }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        {/* SWITCH CASE STATEMENT */}
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
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
                </>
              );
            }
            case formType === "register": {
              return (
                <>
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

                  <InputType
                    label={"Name"}
                    labelFor={"forName"}
                    type={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <InputType
                    label={"Organization Name"}
                    labelFor={"forOrganizationName"}
                    type={"text"}
                    name={"organizationName"}
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                  />

                  <InputType
                    label={"Hospital Name"}
                    labelFor={"forHospitalName"}
                    type={"text"}
                    name={"hospitalName"}
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                  />

                  <InputType
                    label={"Website"}
                    labelFor={"forWebsite"}
                    type={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />

                  <InputType
                    label={"Address"}
                    labelFor={"forAddress"}
                    type={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  <InputType
                    label={"Phone"}
                    labelFor={"forPhone"}
                    type={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

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
