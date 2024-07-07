import User from "../MODEL/UserSchema.js"
import jwt from 'jsonwebtoken'
//CONTROLLER E SERVICE DE CRIAR USUARIO
const create = async (req,res) => {
    
    try {
       const  {email,password}= req.body
       const newUser = await User.create({ email, password })

       console.log(generateToken())
       res.json({
        newUser
    })
    } catch (error) {
        
        console.log(error)
    }

}

//CONTROLLER E SERVICE DE LOGIN
const login =  async (req,res) => {
    try {
        const {email,password} = req.body
         const user = await User.findOne({email})
    if(!user){
        res.json({
            message: "Usuario não encontrado",

        })
    }{
      
      
        console.log(generateToken())
        res.json({
           user
           
        })
    }
    } catch (error) {
       console.log(error)
    }
   
}

//CRIANDO TOKEN
const generateToken = (id)=> {

    return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 86400 });}



export {create,login}




