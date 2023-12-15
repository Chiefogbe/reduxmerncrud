import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { deleteuser, getusers } from '../redux/userSlice'

const Home = () => {
  const dispatch=useDispatch()
  
  const users=useSelector((state)=>state.users.users)
  
  useEffect(()=>{
    const fetchdata=()=>{
      axios.get('http://localhost:5000/api/user/get/')
      .then((res)=>{
        console.log(res.data)
        dispatch(getusers(res.data))
      })
      .catch(()=>{
        console.log(error)
      })
    }

    fetchdata()
  },[])

  const handledelete=(id)=>{
    axios.delete('http://localhost:5000/api/user/deleteuser/' + id)
    .then((res)=>{
      console.log(res)
      dispatch(deleteuser({id}))
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>

        <div className='flex justify-center p-3'>
         <Link to='/Create'><button className='bg-green-900 rounded p-2 font-bold text-white'>Add</button></Link>
        </div>

        <div className='flex justify-between gap-2 p-3 font-bold bg-slate-500 text-white'>
          <h1>Name</h1>
          <h1>Email</h1>
          <h1>Age</h1>
          <h1>Action</h1>
        </div>

        {users.map((user, key)=>{
          return(
            <div key={key} className='flex justify-between g-2 m-5'>
              <h2>{user.name}</h2>
              <h2>{user.email}</h2>
              <h2>{user.age}</h2>
              <span>
              <Link to={`/Update/${user.id}`}><button className='bg-green-900 '>Update</button></Link>
              <button onClick={()=>handledelete(user.id)} className='bg-red-900 ml-1'>Delete</button>
              </span>
            </div>
          )
        })}
    </div>
  )
}

export default Home
