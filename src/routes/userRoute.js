import express from 'express'

import { registerUser, loginUser, getProfiles } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/getprofiles', getProfiles)
export default userRouter