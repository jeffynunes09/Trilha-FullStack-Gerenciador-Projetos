import User from "../MODEL/UserSchema.js";
import Project from "../MODEL/ProjectSchema.js";
import jwt from 'jsonwebtoken'



const createProject = async (req,res) => {

const {name ,description} = req.body
 const  user = req.userId 
 
try {
    const project = await Project.create({name,description,user})

    if(project){
        res.status(201).json({
         project: {
            name:project.name,
            description: project.description,
            user: project.user
         }
           
        })
    }{
        console.log('Erro ao criar projeto')
        res.status(400).json({
            message:'Erro ao criar projeto'
        })
    }
    
} catch (error) {
    console.log(error)
    
}









}










export {
    createProject
}