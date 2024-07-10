import express from 'express'
import connectDatabase from './DATABASE/dataBase.js'
import dotenv from "dotenv";
import userRouter from './ROUTES/userRoutes.js';
import projectRoutes from './ROUTES/projectRoutes.js';
import cors from 'cors'




const port = 4000
const app = express()
dotenv.config();
connectDatabase()

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    optionsSuccessStatus: 200 // Para suportar navegadores mais antigos
  };
  
  app.use(cors(corsOptions));
  

app.use(express.json());
app.use("/user",userRouter)
app.use('/projects',projectRoutes)


app.listen(port || process.env.PORT, () => {
    console.log(`SERVIDOR NO AR`)
})