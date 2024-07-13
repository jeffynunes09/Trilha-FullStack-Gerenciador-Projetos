//IMPORTES
import Project from "../MODEL/ProjectSchema.js";


// CONTROLLLER E SERVICE CRIACÃO DE PROJETOS

const createProject = async (req, res) => {
    const { name, description } = req.body;
  
    try {
      const user = req.userId;
  
      const project = await Project.create({ name, description, user });
  
      if (project) {
        return res.status(201).json({
          project: {
            name: project.name,
            description: project.description,
            user: project.user,
          },
        });
      } else {
        console.log('Erro ao criar projeto');
        return res.status(400).json({ message: 'Erro ao criar projeto' });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error.message);
    }
  };


// CONTROLLLER E SERVICE ENCONTRAR TODOS OS PROJETOS CRIADOS NA APLICAÇÃO

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
// CONTROLLLER E SERVICE  PROEJTOS POR ID 
const findProjectsById =  async  (req,res) =>{

  const {id} = req.params 
  try {
    const project = await Project.findById(id)
    if(!project){
      console.log('Projeto não encontrado')
    }
    res.status(201).json({
      project
    })
    
  } catch (error) {
    console.log(error)
  }

}
// CONTROLLLER E SERVICE  PROEJTOS POR ID DO USER LOGADO
const findProjectsByUserId = async(req, res) =>{
  const id = req.userId;
  try {
    console.log(`Buscando projetos para o usuário ID: ${id}`);
    const projects = await Project.find({ user: id }).sort({ createdAt: -1 }).populate('user');
    console.log(`Projetos encontrados: ${projects.length}`);
    return res.status(200).json(projects);
  } catch (e) {
    console.error(`Erro ao buscar projetos: ${e.message}`);
    return res.status(500).send(e.message);
  }
}

  // CONTROLLLER E SERVICE DE DELETAR PROJETOS 
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


// CONTROLLLER E SERVICE  ATUALIZAR PROJETOS
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
    updateProject,
    findProjectsByUserId,
    findProjectsById
    
}