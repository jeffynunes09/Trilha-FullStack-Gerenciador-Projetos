
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'


const UserSchema = new  mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
        select: true,
      },
      projects :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "project",
        
      }

}) 


//CRIPTOGRAFANDO SENHA ANTES DE SALVAR 
UserSchema.pre("save", async function (next) {

    this.password = await bcrypt.hash(this.password,10)
    next()
})



const User = mongoose.model('User', UserSchema)


export default User;