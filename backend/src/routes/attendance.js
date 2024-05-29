import express from 'express';
const router = express.Router();  

import { updateAttendance } from '../../controllers/attendanceController.js';

router.post('/:id', updateAttendance)


export default router;
