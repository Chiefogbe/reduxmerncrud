import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { adduser } from '../redux/userSlice'

const Create = () => {

  const dispatch=useDispatch()

  const navigate=useNavigate()
  const [name, setName]=useState()
  const [email, setEmail]=useState()
  const [age, setAge]=useState()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/api/user/post', {name, email, age})
    .then((res)=>{
      dispatch(adduser(res.data))
      navigate('/')
    })
    .catch((error)=>{
      console.log(error)
    })

 
  }

  return (
    <div>
      <h1 className='text-center mb-4'>Create Page</h1>
      <div className='flex justify-center mx-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input type="text" placeholder='Name...' className='bg-gray-500 p-2' onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Email...' className='bg-gray-500 p-2' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='number' placeholder='Age...' className='bg-gray-500 p-2' onChange={(e)=>setAge(e.target.value)}/>
        <button type='submit' className='bg-green-700 rounded p-1'>Create</button>
      </form>
      </div>
  
    </div>
  )
}

export default Create
