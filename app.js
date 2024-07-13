//IMPORTES
import express from 'express'
import connectDatabase from './DATABASE/dataBase.js'
import dotenv from "dotenv";
import swaggerRouter from './ROUTES/swaggerRoutes.js';
import userRouter from './ROUTES/userRoutes.js';
import projectRoutes from './ROUTES/projectRoutes.js';
import cors from 'cors'



//CONFIGS DO SERVER
const port = 4000
const app = express()
dotenv.config();
connectDatabase()
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    optionsSuccessStatus: 200 // Para suportar navegadores mais antigos
  };
  

// HABILITAÇÃO DO Cross-Origin Resource Sharing  
app.use(cors(corsOptions));
  
//ROUTES 
app.use(express.json());
app.use("/user",userRouter)
app.use('/projects',projectRoutes)
app.use('/doc',swaggerRouter)

// SERVER 
app.listen(port || process.env.PORT, () => {
    console.log(`SERVIDOR NO AR`)
})