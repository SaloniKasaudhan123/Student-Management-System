import express from 'express'
const router = express.Router();

import { addStudent , getStudent , getStudentById , updateStudent , deleteStudent} from '../controllers/student.controller.js';

router.post("/student",addStudent);
router.get("/student",getStudent);
router.get("/student/:id",getStudentById);
router.put("/student/:id",updateStudent);
router.delete("/student/:id",deleteStudent);


export default router;