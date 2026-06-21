import router from './src/routes/student.route.js';
import { errorHandler } from './src/middlewares/error.middleware.js';
import connectDB from './src/cofig/db.js';
import app from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 4000;

try{
    connectDB();
    console.log("mongo", process.env.MONGO_URL)
}catch(err){
    throw err;
}

app.use("/api",router)

app.use(errorHandler);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })