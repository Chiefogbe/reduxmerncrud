import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { updateuser } from '../redux/userSlice'

const Update = () => {
  const {id}=useParams()
  const users=useSelector((state)=>state.users.users)
  const user = users.find(u => u.id === id)
  const [name, setName]=useState()
  const [email, setEmail]=useState()
  const [age, setAge]=useState()

  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=> {
   
    setName(user.name)
    setEmail(user.email)
    setAge(user.age)
}, [])
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:5000/api/user/update/' +id, {name, email, age})
    .then((res)=>{
      dispatch(updateuser({id,name,email,age}))
      navigate('/')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
      <h1 className='text-center mb-4'>Update Page</h1>
      <div className='flex justify-center mx-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <input type="text" placeholder='Name...' className='bg-gray-500 p-2' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Email...' className='bg-gray-500 p-2' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type='number' placeholder='Age...' className='bg-gray-500 p-2' value={age} onChange={(e)=>setAge(e.target.value)}/>
        <button type='submit' className='bg-green-700 rounded p-1'>Update</button>
      </form>
      </div>
    </div>
  )
}

export default Update
