import express from 'express'
const router = express.Router();

import { addCourse , getCourse , updateCourse , deleteCourse } from '../controllers/course.controller.js';

router.post("/" , addCourse);
router.get("/" , getCourse);
router.put("/:id" , updateCourse);
router.delete("/:id" , deleteCourse);

export default router;