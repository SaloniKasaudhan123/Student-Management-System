import express from 'express'
const router = express.Router();

import { addStudent , getStudent , getStudentById , updateStudent , deleteStudent} from '../controllers/student.controller.js';

router.post("/",addStudent);
router.get("/",getStudent);
router.get("/:id",getStudentById);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);


export default router;