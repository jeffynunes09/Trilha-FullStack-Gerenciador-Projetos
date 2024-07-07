
import Project from "../MODEL/ProjectSchema.js";




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

const findAllProject = async (req,res) => {
try{
    
    const projects = await Project.find()
    res.send({
        projects
    })

}catch(error){

    console.log(error)

}

}


const deleteProject = async (req,res) => {

    try {
        const { id } = req.params;
        const project = await Project.findByIdAndDelete(id)
        if(!project){
            return res.status(400).json({
                message:"Projeto não encontrado!"
            })
        }{
            res.status(201).json({
                message:"Projeto excluido com sucesso!"
            })
        }
        
    } catch (error) {
        console.log(error)
        
    }
}



const updateProject =  async (req, res) => {
            const { name, description} = req.body;
            const { id } = req.params;
            
          
            try {
              const project = await Project.findByIdAndUpdate(id,{name,description},{ new: true, runValidators: true } )
              
              if (!project) {
            return res.status(404).json({ message: 'Projeto não encontrado' });
             }

            return res.status(200).json({ project});
                  
            } catch (e) {
              return res.status(500).send(e.message);
            }
          }
        

   



export {
    createProject,
    findAllProject,
    deleteProject,
    updateProject
}