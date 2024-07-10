import { Router } from "express";
import { create, loginController } from "../CONTROLLERS/userController.js";
import authMiddleware from "../MIDDLEWARE/authMiddleware.js";

 const userRouter = Router()


userRouter.post('/create',create)
userRouter.post('/login', loginController)




export default userRouter