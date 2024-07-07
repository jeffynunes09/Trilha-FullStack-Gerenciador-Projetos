import { Router } from "express";
import { create, login } from "../CONTROLLERS/userController.js";

 const userRouter = Router()


userRouter.post('/create', create)
userRouter.post('/login', login)



export default userRouter