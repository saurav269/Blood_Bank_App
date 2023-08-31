import React from 'react'
import Form from '../../Components/shared/Form/Form'


const Register = () => {
  return (
    <>
     <div className='row g-0'>
      <div className='col-md-8 form-banner'>
        <img src='./assets/images/banner2.jpg' alt='register_image'/>
      </div>
      <div className='col-md-4 form-container'>
        <Form formTitle={"Register"} submitButton={"Register"} formType={"register"} />
      </div>
     </div>
    </>
  )
}

export default Register
