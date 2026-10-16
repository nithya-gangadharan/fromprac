import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Add() {
  const [userdata,setuserdata]=useState({name:"",age:""})
  console.log(userdata);
  const adduser= async()=>{
  const res= await  axios.post('https://formserver-fdnu.onrender.com/users',userdata)
  console.log(res);
  
  }
  return (
    <>
   <form action="" className='m-5 border border-5'>
<input value={userdata.name} onChange={(e)=>setuserdata({...userdata,name:e.target.value})} type="text" placeholder='name'/> <br />
<input value={userdata.age} onChange={(e)=>setuserdata({...userdata,age:e.target.value})}  type="text" placeholder='age'/> <br />
<button className='btn btn-primary' onClick={adduser}>add</button>
   </form>
    
    </>
  )
}

export default Add