import React, { useEffect, useState } from 'react'
import Header from '../../components/shared/Layout/Header'
import API from '../../Services/API';

const Analytics = () => {
    const [data, setData] = useState([]);
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
  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap">
        {data?.map((ele) => (
          <div className="card m-2 p-1" style={{ width: "18rem",background: "linear-gradient(to right, #5555F1, #02AABD)" }}>
            <div className="card-body">
              <h2 className="card-title text-dark text-center mb-3" style={{ backgroundColor: "#D8B5FF" }}>{ele.bloodgroup}</h2>
              <p className="card-text" style={{color : "white"}}>
                Total In : <b>{ele.totalIn}</b>(ML)
              </p>
              <p className="card-text" style={{color : "white"}}>
                Total Out : <b>{ele.totalOut}</b>(ML)
              </p>
            </div>
            <div className='card-footer text-light text-center'style={{ backgroundColor: "#34AD46" }}>
                Total Blood Available : <b>{ele.availableBlood}</b>(ML)
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Analytics
