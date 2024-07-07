import { Router } from "express";
import { create, loginController } from "../CONTROLLERS/userController.js";

 const userRouter = Router()


userRouter.post('/create', create)
userRouter.post('/login', loginController)



export default userRouter