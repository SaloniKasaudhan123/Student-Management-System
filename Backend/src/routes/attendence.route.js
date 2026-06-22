import express from 'express'
const router = express.Router();

import { markAttendence , getAttendence , getAttendenceById , updateAttendence , deleteAttendence } from '../controllers/attendence.controller.js';

router.post("/",markAttendence);
router.get("/",getAttendence);
router.get("/:id",getAttendenceById);
router.put("/:id",updateAttendence);
router.delete("/:id",deleteAttendence);

export default router;