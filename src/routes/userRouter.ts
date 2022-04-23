import Express = require('express')
import {UserController} from "../controllers/UserController"
export const userRouter = Express.Router()

userRouter.get('/users', UserController.AllUsers)
userRouter.post('/add', UserController.AddUser)
userRouter.get('/user', UserController.UserByName)
userRouter.get('/user/:id', UserController.findById)
