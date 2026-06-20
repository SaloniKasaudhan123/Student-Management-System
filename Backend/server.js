import connectDB from './src/cofig/db.js';
import app from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 4000;

async function server() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

server();