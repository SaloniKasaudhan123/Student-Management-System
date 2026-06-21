import express from 'express'
const router = express.Router();

import { addStudent , getStudent } from '../controllers/student.controller.js';

router.post("/student",addStudent);
router.get("/student",getStudent)


export default router;