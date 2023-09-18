import React, { useEffect, useState } from 'react'
import Layout from './../../components/shared/Layout/Layout';
import moment from 'moment';
import API from '../../Services/API';
import { useSelector } from 'react-redux';

const ConsumerPage = () => {
    const [data, setData] = useState([]);
    const {user} = useSelector(state => state.auth)

    //FIND DONAR RECORDS
    const getDonar= async()=>{
        try{
            const {data} = await API.post('/inventory/get-inventory-hospital',{
                filters : {
                    inventoryType : 'out',
                    hospital: user?._id,
                }
            });
            console.log(data)
            if(data?.success){
                setData(data?.inventory)
            }
        }catch(err){
            console.log(err)
        }
    };

    useEffect(() =>{
        getDonar()
    },[user])
  return (
    <Layout>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity (ML)</th>
              <th scope="col">Email</th>
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
                <td>{moment(ele.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default ConsumerPage
