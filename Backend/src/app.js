import express from 'express';
import courseRouter from './routes/course.route.js'
import studentRouter from './routes/student.route.js';
import attendenceRouter from './routes/attendence.route.js'



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/api/student" , studentRouter)
app.use("/api/course" , courseRouter)
app.use("/api/attendence" , attendenceRouter)


export default app;