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


app.use(express.json());
app.use("/user",userRouter)
app.use('/projects',projectRoutes)
app.use(cors())




app.listen(port || process.env.PORT, () => {
    console.log(`SERVIDOR NO AR`)
})