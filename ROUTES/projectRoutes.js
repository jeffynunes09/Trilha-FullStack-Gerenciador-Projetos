import { Router } from "express";
import authMiddleware from "../MIDDLEWARE/auth.middleware.js";
import { createProject } from "../CONTROLLERS/projectController.js";


 const projectRoutes = Router()


 projectRoutes.post('/create', authMiddleware,createProject)




 export default projectRoutes