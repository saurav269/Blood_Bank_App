import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import moment from 'moment';
import API from '../../Services/API';
const DonarList = () => {
  const [data, setData] = useState([]);

  //FIND DONAR RECORDS
  const getDonar= async()=>{
      try{
          const {data} = await API.get('/admin/donar-list');
          console.log(data)
          if(data?.success){
              setData(data?.donarData)
          }
      }catch(err){
          console.log(err)
      }
  };

  //DELETE FUNCTION
  const handleDelete=async(id)=>{
    try{
      let answer = window.prompt('Are You Sure to Delete this Donor?', 'Sure')
      if(!answer) return
      const{data} = await API.delete(`/admin/delete-donar/${id}`)
      alert(data?.message)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() =>{
      getDonar()
  },[])
return (
  <Layout>
    <table className="table table-bordered table-striped mt-3 ms-2">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
          <th scope="col">Time & Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((ele) => (
          <tr key={ele._id}>
            <td>{ele.name || ele.organisationName + " (ORG)"}</td>
            <td>{ele.email}</td>
            <td>{ele.phone}</td>
            <td>{ele.address}</td>
            <td>{moment(ele.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            <td>
              <button className='btn btn-danger' onClick={() => handleDelete(ele._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
);
}

export default DonarList
