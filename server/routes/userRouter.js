import express from 'express'
import { getUser, userLogin, userRegister } from '../controllers/userController.js';


const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)
userRouter.get('/users', getUser)


export default userRouter;