import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();

const url = process.env.MONGO_URL;

async function connectDB() {
    try{
        await mongoose.connect(url);
        console.log("Database Connected")
    }catch(err){
        console.log(err)
    }
}

export default connectDB;
