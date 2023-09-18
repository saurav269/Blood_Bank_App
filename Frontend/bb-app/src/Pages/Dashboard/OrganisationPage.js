import React, { useEffect, useState } from 'react'
import Layout from './../../components/shared/Layout/Layout';
import API from '../../Services/API';
import moment from 'moment';
import { useSelector } from 'react-redux';

const OrganisationPage = () => {
    const [data, setData] = useState([]);
    const {user} = useSelector((state) => state.auth)

    //FIND HOSPITAL RECORDS
    const getOrg= async()=>{
        try{
          if(user?.role === "donar"){
            const { data } = await API.get("/inventory/get-organisation");
            console.log(data);
            if (data?.success) {
              setData(data?.organisations);
            }
          }
          if(user?.role === "hospital"){
            const { data } = await API.get("/inventory/get-organisation-for-hospital");
            console.log(data);
            if (data?.success) {
              setData(data?.organisations);
            }
          }
        }catch(err){
            console.log(err)
        }
    };

    useEffect(() =>{
        getOrg()
    },[user])
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
              <td>{ele.organisationName}</td>
              <td>{ele.email}</td>
              <td>{ele.phone}</td>
              <td>{ele.address}</td>
              <td>{moment(ele.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default OrganisationPage
