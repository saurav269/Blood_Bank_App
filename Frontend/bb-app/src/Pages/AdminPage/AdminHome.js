import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { useSelector } from 'react-redux'

const AdminHome = () => {
    const {user} = useSelector((state) => state.auth)
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3 className='mt-4'>Manage Blood bank App</h3>
          <hr />
          <p>
            The Blood Bank application is a lifesaving tool designed to
            streamline the blood donation process. It allows donors to register,
            schedule appointments, and receive notifications for donation
            opportunities. Hospitals can quickly access the available blood
            inventory and request specific blood types as needed. Additionally,
            it provides real-time updates on critical shortages, fostering a
            strong community of donors. This user-friendly app serves as a vital
            bridge between donors and recipients, ensuring a steady supply of
            blood for emergencies and medical treatments.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default AdminHome
