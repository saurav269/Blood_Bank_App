import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/shared/Form/Spinner'
import { toast } from 'react-toastify'
import Layout from '../components/shared/Layout/Layout'
import Modal from './../components/shared/modal/Modal';
import API from '../Services/API'
import moment from 'moment'
import '../Styles/Analytics.css'

const HomePage = () => {
  const {loading, error} = useSelector((state) => state.auth)
  const [data, setData] = useState([]);

  //GET INVENTORY FUNCTION
  const getBloodRecords=async()=>{
    try{
      const {data} = await API.get('/inventory/get-inventory')
      if(data?.success){
        setData(data?.inventory)
        console.log(data)
      }
    }catch(err){
      console.log(err)
    }
  };

  useEffect(() =>{
    getBloodRecords()
  },[])
  return (
    <>
      <Layout>
        {error && <span>{toast.error(error)}</span>}
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="container">
              <h3
                className="ms-4"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-plus text-success py-4"></i>
                Add Inventory
              </h3>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Inventory Type</th>
                    <th scope="col">Quantity(ML)</th>
                    <th scope="col">Donor Email</th>
                    <th scope="col">Time & Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((ele) => (
                    <tr key={ele._id}>
                      <td>{ele.bloodgroup}</td>
                      <td>{ele.inventoryType}</td>
                      <td>{ele.quantity}</td>
                      <td>{ele.email}</td>
                      <td>{moment(ele.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Modal />
            </div>
          </>
        )}
      </Layout>
    </>
  );
}

export default HomePage
