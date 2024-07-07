
import mongoose from "mongoose";

const connectDatabase = () => {

console.log('Wait connecting to the database...')
try {
    mongoose.connect(process.env.DATABASE)

    console.log(`MongoDB Atlas Connected!`)

} catch (error) {
    console.log(`Error connecting to MongoDB Atlas: ${err}`)
}

}


export default connectDatabase;

