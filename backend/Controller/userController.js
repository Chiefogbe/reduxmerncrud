import userModelSchema from "../Model/userModel.js"

export const getUsers=(req,res)=>{
  userModelSchema.find({})
  .then((user)=>{
    res.json(user)
  })
  .catch((error)=>{
    res.json(error)
  })
}

export const postUsers=(req,res)=>{
  userModelSchema.create(req.body)
  .then((user)=>{
    res.json(user)
  })
  .catch((error)=>{
    res.json(error)
  })
}

export const deleteuser=(req,res)=>{
  const id=req.params.id
  userModelSchema.findByIdAndDelete({_id:id})
  .then((user)=>{
    res.json(user)
  })
  .catch((error)=>{
    res.json(error)
  })
}


export const updateuser=(req,res)=>{
  const id=req.params.id
  userModelSchema.findByIdAndUpdate({_id:id}, {name:req.body.name, email:req.body.email, age:req.body.age})
  .then((user)=>{
    res.json(user)
  })
  .catch((error)=>{
    res.json(error)
  })

}