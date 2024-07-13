//IMPORTES
import { Router } from "express";
import { createProject,findAllProject,deleteProject,updateProject, findProjectsByUserId, findProjectsById } from "../CONTROLLERS/projectController.js";
import authMiddleware from "../MIDDLEWARE/authMiddleware.js";

//ROUTER DO PROJETO
 const projectRoutes = Router()

 //ROTA DE CRIAÇÃO
 projectRoutes.post('/create',authMiddleware,createProject)

 //ROTA DE ENCONTRAR TODOS OS PROJETOS
 projectRoutes.get('/findAll',authMiddleware,findAllProject)

 //ROTA DE ENCONTRAR PROJETO EXPECIFICO 
 projectRoutes.get('/findProject/:id',authMiddleware, findProjectsById)
 
 //ROTA DE DELETAR PROEJTO
 projectRoutes.delete('/delete/:id',authMiddleware,deleteProject)

 //ROTA DE ATUALIZAR PROJETO
 projectRoutes.put('/updated/:id',authMiddleware,updateProject)

 //ROTA DE ENCONTRAR PROJETOS POR ID DO USUARIO LOGADO
 projectRoutes.get('/myProjects',authMiddleware,findProjectsByUserId)

 export default projectRoutes