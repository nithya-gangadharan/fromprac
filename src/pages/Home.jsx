import React, { useEffect, useState } from 'react'
import Edit from './Edit'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
    const[users,setusers]=useState([])
    useEffect(() => {
     getusers()
    
    }, [])
    const getusers= async()=>{
         const users= await axios.get('https://formserver-fdnu.onrender.com/users')
         console.log(users);
         setusers(users.data)
    }
    const deleteuser= async(id)=>{
      const res=await axios.delete(`https://formserver-fdnu.onrender.com/users/${id}`)
      console.log(res);
      getusers()
      
    }
  return (
    <>
    <div className='d-flex m-5 justify-content-between'>
        <h1>users list</h1>
      <Link to={'/add'} className='btn btn-primary p-4 rounded'>add users</Link>
    </div>
    <table className='table m-5 '>
<thead>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>actions</th>

    </tr>
</thead>
    <tbody>
     {
        users?.length>0?
        users.map((user,index)=>(
               <tr>
            <td>{index+1}</td>
            <td>{user?.name}</td>
            <td>{user?.age}</td>
            <td>
<Link to={`/user/edit/${user.id}`}>EDIT</Link>
<button className='btn btn-danger' onClick={()=>deleteuser(user.id)}>delete</button>

            </td>

        </tr>
        ))
        :
        <tr>no user found</tr>
     }
    </tbody>

    </table>
    </>
  )
}

export default Home