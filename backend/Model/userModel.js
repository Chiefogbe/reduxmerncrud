import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },

  email:{
    type:String,
    required:true,
    unique:true
  },

  age:{
    type:Number,
    required:true,
  }
},{
  timestamps:true
})

const userModelSchema=mongoose.model('users', userSchema)
export default userModelSchema