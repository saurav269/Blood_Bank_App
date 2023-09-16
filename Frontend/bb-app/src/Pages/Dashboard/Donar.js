import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import API from '../../Services/API'
import moment from 'moment'

const Donar = () => {
    const [data, setData] = useState([]);

    //FIND DONAR RECORDS
    const getDonar= async()=>{
        try{
            const {data} = await API.get('/inventory/get-donars');
            console.log(data)
            if(data?.success){
                setData(data?.donars)
            }
        }catch(err){
            console.log(err)
        }
    };

    useEffect(() =>{
        getDonar()
    },[])
  return (
    <Layout>
                   <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Time & Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((ele) => (
                    <tr key={ele._id}>
                      <td>{ele.name || ele.organisationName + " (ORG)"}</td>
                      <td>{ele.email}</td>
                      <td>{ele.phone}</td>
                      <td>{ele.address}</td>
                      <td>{moment(ele.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
    </Layout>
  )
}

export default Donar
