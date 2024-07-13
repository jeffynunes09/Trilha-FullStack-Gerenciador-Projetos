//IMPORTES
import mongoose from 'mongoose';

// SCHEMA DO PROJETO
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 100,
  },
  description: {
    type: String,
    required: true,
    max: 1000,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
