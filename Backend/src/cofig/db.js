import {MongoClient} from 'mongodb'
import dotenv from 'dotenv'

dotenv.config();

const url = process.env.MONGO_URL;
const client = new MongoClient(url);

async function connectDB() {
    try{
        await client.connect();
        console.log("Database Connected")
    }catch(err){
        console.log(err)
    }
}

export default connectDB;
