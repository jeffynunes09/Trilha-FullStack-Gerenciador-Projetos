import { Router } from "express";
import { createProject,findAllProject,deleteProject,updateProject, findProjectsByUserId } from "../CONTROLLERS/projectController.js";
import authMiddleware from "../MIDDLEWARE/authMiddleware.js";


 const projectRoutes = Router()


 projectRoutes.post('/create',authMiddleware,createProject)
 projectRoutes.get('/findAll', findAllProject)
 projectRoutes.delete('/delete/:id',deleteProject)
 projectRoutes.put('/updated/:id',updateProject)
projectRoutes.get('/myProjects',authMiddleware,findProjectsByUserId)

 export default projectRoutes