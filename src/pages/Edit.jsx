import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Edit() {
  const {id}=useParams()
  console.log(id);
  
const [userdata, setuserdata] = useState({
  name: "",
  age: ""
})
useEffect(() => {
 getusers()
}, [])

const getusers= async()=>{
  const res= await axios.get(`https://formserver-fdnu.onrender.com/users/${id}`)
  // console.log(res.data);
  setuserdata(res.data)
  
}
const updateusers= async()=>{
  const res=await axios.put(`https://formserver-fdnu.onrender.com//users/${id}`,userdata)
  console.log(res);
  
}
  return (
    <div>
<div className="container mt-5">
<h1 className="text-center mb-4">Edit User Details</h1>

    <form className="border border-2 rounded p-4 shadow">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
        value={userdata.name}
          type="text"
          className="form-control"
          placeholder="Enter name"
          onChange={(e)=>setuserdata({...userdata,name:e.target.value})}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
        value={userdata.age}
          type="number"
          className="form-control"
          placeholder="Enter age"
          onChange={(e)=>setuserdata({...userdata,age:e.target.value})}
        />
      </div>

      <div className="text-center">
        <button type="button" className="btn btn-success" onClick={updateusers}>
          Update User
        </button>
      </div>
    </form>
  </div>

      
    </div>
  )
}

export default Edit