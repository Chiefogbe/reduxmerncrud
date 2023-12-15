import express from 'express'
import { deleteuser, getUsers, postUsers, updateuser } from '../Controller/userController.js'

export const router=express.Router()

router.post('/post', postUsers)
router.get('/get', getUsers)
router.delete('/deleteuser/:id', deleteuser)
router.put('/update/:id', updateuser)