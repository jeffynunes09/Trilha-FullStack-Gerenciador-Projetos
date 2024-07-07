import User from "../MODEL/UserSchema.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
//CONTROLLER E SERVICE DE CRIAR USUARIO
const create = async (req,res) => {
    
    try {
       const  {email,password,name}= req.body
       const newUser = await User.create({ email, password,name})
 
       const token = generateToken(newUser._id)
       res.json({
        newUser,
        token

        
        
    })
    } catch (error) {
        
        console.log(error)
    }

}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: '1d' });
};

// Controlador de login
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email,password)
        // Verifica se o email e a senha foram fornecidos
        if (!email || !password) {
           
            return res.status(400).json({ message: "Email e senha são obrigatórios" });
        }

        // Procura o usuário pelo email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Verifica se a senha está correta
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Senha incorreta" });
        }

        // Gera o token JWT
        const token = generateToken(user._id);

        // Retorna o usuário e o token
        res.status(200).json({
            user: {
                id: user._id,
                email: user.email,
            },
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao fazer login" });
    }
};




//CRIANDO TOKEN

export {create,loginController}




