import express from 'express';
import courseRouter from './routes/course.route.js';
import studentRouter from './routes/student.route.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/api/student" , studentRouter)
app.use("/api/course" , courseRouter)


export default app;