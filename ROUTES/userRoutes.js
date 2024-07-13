//IMPORTES
import { Router } from "express";
import { create, loginController } from "../CONTROLLERS/userController.js";

//ROUTER DO USER
const userRouter = Router()

// ROTA DE CRIAR USUARIO
userRouter.post('/create',create)

//ROTA DE LOGIN E AUTENTICAÇÃO DE USUARIO
userRouter.post('/login', loginController)




export default userRouter