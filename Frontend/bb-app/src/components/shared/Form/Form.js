import React, { useState } from "react";
import InputType from "./InputType";
import {Link} from 'react-router-dom'

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
        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id='donarRadio'
              value={'donar'}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="donarRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id='adminRadio'
              value={'admin'}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id='hospitalRadio'
              value={'hospital'}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id='orgnisationRadio'
              value={'organisation'}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="orgnisationRadio" className="form-check-label">
              Orgnisation
            </label>
          </div>
        </div>
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
                   {(role === 'admin' || role === 'donar') && (
                    <InputType
                    label={"Name"}
                    labelFor={"forName"}
                    type={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  )}
                  {role === 'organisation' && (
                      <InputType
                      label={"Organization Name"}
                      labelFor={"forOrganizationName"}
                      type={"text"}
                      name={"organizationName"}
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  )}
                  {role === 'hospital' && (
                    <InputType
                    label={"Hospital Name"}
                    labelFor={"forHospitalName"}
                    type={"text"}
                    name={"hospitalName"}
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                  />
                  )}
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

        <div className="d-flex flex-row justify-content-between">
          {formType === 'login' ? (
            <p>Not Register Yet ? 
              <Link to='/register'> Click Here !</Link>
            </p>
          ) : (<p>
            Already User. Please!
              <Link to='/login'> Login Here</Link>
          </p>)}
          <button className="btn btn-primary" type="submit">
            {submitButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
