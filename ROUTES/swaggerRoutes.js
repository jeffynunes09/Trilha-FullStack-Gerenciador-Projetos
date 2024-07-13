//IMPORTES
import { Router } from "express";
import swaggerUi from'swagger-ui-express'

//ROTAS DO SWAGGER 
//DOCUMENTAÇÃO DA API
import swaggerDocument from '../swagger.json' assert { type: 'json' };
const swaggerRouter = Router()

swaggerRouter.use('/', swaggerUi.serve)
swaggerRouter.get('/', swaggerUi.setup(swaggerDocument))




export default  swaggerRouter