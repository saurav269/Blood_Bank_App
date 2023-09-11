import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/shared/Form/Spinner'
import { toast } from 'react-toastify'
import Layout from '../components/shared/Layout/Layout'
import Modal from './../components/shared/modal/Modal';

const HomePage = () => {
  const {loading, error} = useSelector((state) => state.auth)
  return (
    <>
      <Layout>
        {error && <span>{toast.error(error)}</span>}
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h3
              className="ms-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{cursor : "pointer"}}
            >
              <i className="fa-solid fa-plus text-success py-4"></i>
              Add Inventory
            </h3>
            <Modal />
          </>
        )}
      </Layout>
    </>
  );
}

export default HomePage
