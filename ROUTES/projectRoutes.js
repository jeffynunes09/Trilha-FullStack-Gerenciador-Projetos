import { Router } from "express";
import authMiddleware from "../MIDDLEWARE/authMiddleware.js";
import { createProject,findAllProject,deleteProject,updateProject } from "../CONTROLLERS/projectController.js";


 const projectRoutes = Router()


 projectRoutes.post('/create',createProject)
 projectRoutes.get('/findAll', findAllProject)
 projectRoutes.delete('/delete/:id',authMiddleware, deleteProject)
 projectRoutes.patch('/updated/:id', authMiddleware,updateProject)


 export default projectRoutes