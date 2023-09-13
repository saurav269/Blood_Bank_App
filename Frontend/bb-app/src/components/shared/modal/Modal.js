import React, { useState } from 'react'
import InputType from '../Form/InputType';
import API from '../../../Services/API';
import { useSelector } from 'react-redux';

const Modal = () => {
  const[inventoryType, setInventoryType] = useState('in');
  const[quantity, setQuantity] = useState(0);
  const[bloodgroup, setBloodgroup]= useState('');
  const[donarEmail, setDonarEmail] = useState("");
  const {user} = useSelector(state => state.auth);

  //Handle Modal Function
  const handleModalSubmit=async()=>{
    try{
      if(!bloodgroup || !quantity){
        return alert('Please provide all Fields')
      }
      const {data} = await API.post('/inventory/create-inventory',{
        donarEmail,
        email : user?.email,
        orgnisation : user?._id,
        inventoryType,
        bloodgroup,
        quantity 
      });
      if(data?.success){
        alert("New Record Added Successfully")
        window.location.reload()
      }
    }catch(err){
      console.log(err)
      window.location.reload()
    }

  }
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Manage Blood Record
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="d-flex mb-3">
                Blood Type : &nbsp;
                <div className="form-check ms-2">
                  <input
                    type="radio"
                    name="inRadio"
                    value={"in"}
                    onChange={(e) => setInventoryType(e.target.value)}
                    defaultChecked
                    className="form-check-input"
                  />
                  <label htmlFor="in" className="form-check-label">
                    IN
                  </label>
                </div>
                <div className="form-check ms-2">
                  <input
                    type="radio"
                    name="inRadio"
                    value={"out"}
                    onChange={(e) => setInventoryType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="out" className="form-check-label">
                    OUT
                  </label>
                </div>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setBloodgroup(e.target.value)}
              >
                <option selected>Open this select menu</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
              </select>
              <InputType
                label={"Donor Email"}
                labelFor={"donarEmail"}
                type={"email"}
                value={donarEmail}
                onChange={(e) => setDonarEmail(e.target.value)}
              />
              <InputType
                label={"Quantity {ML}"}
                labelFor={"quantity"}
                type={"Number"}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal
