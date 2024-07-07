
import mongoose from 'mongoose';
import User from './UserSchema.js'


const projectSchema = new mongoose.Schema({

    name: {
        type: String,
        required:true,
        max: 100, 

    },
    description: {
        type: String,
        required:true,
        max: 1000,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
})




const Project = mongoose.model('project',projectSchema)

export default Project;