import { Router } from "express";
import { createProject,findAllProject,deleteProject,updateProject, findProjectsByUserId, findProjectsById } from "../CONTROLLERS/projectController.js";
import authMiddleware from "../MIDDLEWARE/authMiddleware.js";


 const projectRoutes = Router()


 projectRoutes.post('/create',authMiddleware,createProject)
 projectRoutes.get('/findAll', findAllProject)
 projectRoutes.get('/findProject/:id', findProjectsById)
 projectRoutes.delete('/delete/:id',deleteProject)
 projectRoutes.put('/updated/:id',updateProject)
projectRoutes.get('/myProjects',authMiddleware,findProjectsByUserId)

 export default projectRoutes