import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
  name:'users',
  initialState:{
    users:[]
  },
  reducers:{
    getusers:(state, action)=>{
      state.users=action.payload.map((user)=>{
        return{
          id:user._id,
          name:user.name,
          email:user.email,
          age:user.age
        }
      })
    },

    adduser:(state,action)=>{
      state.users.push(action.payload)
    },

    deleteuser:(state, action)=>{
      const id=action.payload.id
      state.users=state.users.filter(x=>x.id !==id)
    },
    updateuser:(state,action)=>{
      
      const index = state.users.findIndex(x => x.id === action.payload.id)
      state.users[index] = {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          age: action.payload.age,
      }
    }
  }
})

export const {getusers, adduser, deleteuser, updateuser}=userSlice.actions
export default userSlice.reducer