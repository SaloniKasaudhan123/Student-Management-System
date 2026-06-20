import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 4000;

dotenv.config();
const app = express();

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});