import { Router } from "express";
import { createProject,findAllProject,deleteProject,updateProject, findProjectsByUserId, findProjectsById } from "../CONTROLLERS/projectController.js";
import authMiddleware from "../MIDDLEWARE/authMiddleware.js";


 const projectRoutes = Router()


 projectRoutes.post('/create',authMiddleware,createProject)
 projectRoutes.get('/findAll',authMiddleware,findAllProject)
 projectRoutes.get('/findProject/:id',authMiddleware, findProjectsById)
 projectRoutes.delete('/delete/:id',authMiddleware,deleteProject)
 projectRoutes.put('/updated/:id',authMiddleware,updateProject)
projectRoutes.get('/myProjects',authMiddleware,findProjectsByUserId)

 export default projectRoutes