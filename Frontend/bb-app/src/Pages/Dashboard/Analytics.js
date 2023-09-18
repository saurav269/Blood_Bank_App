import React, { useEffect, useState } from 'react'
import Header from '../../components/shared/Layout/Header'
import API from '../../Services/API';
import moment from 'moment';
import '../../Styles/Analytics.css'

const Analytics = () => {
    const [data, setData] = useState([]);
    const[inventoryData, setInventoryData] = useState([])
    //GET BLOOD GROUP DATA
    const getBloodGroupData = async() => {
        try{
            const {data} = await API.get('/analytics/bloodGroups-data');
            if(data?.success){
                console.log(data)
                setData(data?.bloodGroupData)
            }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() =>{
        getBloodGroupData()
    },[])

    //GET INVENTORY FUNCTION
  const getBloodRecords=async()=>{
    try{
      const {data} = await API.get('/inventory/get-recent-inventory')
      if(data?.success){
        setInventoryData(data?.inventory)
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
      <Header />
      <div className="d-flex flex-row flex-wrap">
        {data?.map((ele, i) => (
          <div
            className="card p-2 mt-2"
            key={i}
            style={{
              width: "18rem",
              background: "linear-gradient(to right, #5555F1, #02AABD)",
               margin : "auto",
            }}
          >
            <div className="card-body">
              <h2
                className="card-title text-dark text-center mb-3"
                style={{ backgroundColor: "white" }}
              >
                {ele.bloodgroup}
              </h2>
              <p className="card-text" style={{ color: "white" }}>
                Total In : <b>{ele.totalIn}</b>(ML)
              </p>
              <p className="card-text" style={{ color: "white" }}>
                Total Out : <b>{ele.totalOut}</b>(ML)
              </p>
            </div>
            <div
              className="card-footer text-light text-center"
              style={{ backgroundColor: "#34AD46" }}
            >
              Total Blood Available : <b>{ele.availableBlood}</b>(ML)
            </div>
          </div>
        ))}
      </div>
      <div className="container my-3">
        <h1 className="my-3">Recent Blood Transactions</h1>
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
            {inventoryData?.map((ele) => (
              <tr key={ele._id}>
                <td>{ele.bloodgroup}</td>
                <td>{ele.inventoryType}</td>
                <td>{ele.quantity}</td>
                <td>{ele.email}</td>
                <td>{moment(ele.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Analytics
