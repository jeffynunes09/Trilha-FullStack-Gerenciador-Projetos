
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const UserSchema = new  mongoose.Schema({

    email : {
        type: String,
        require:true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: true,
    },

}) 


//CRIPTOGRAFANDO SENHA ANTES DE SALVAR 
UserSchema.pre("save", async function (next) {

    this.password = await bcrypt.hash(this.password,10)
    next()
})

UserSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.password;
    return obj;}

const User = mongoose.model('User', UserSchema)


export default User;