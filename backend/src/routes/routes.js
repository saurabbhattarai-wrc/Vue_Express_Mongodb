import express from 'express';
// import { addEmployee, updateAttendance} from '../../controllers/employeeController.js';
// import { getAllEmployees } from '../../controllers/employeeController.js';

import employeeRoutes from './employees.js'
import attendanceRoutes from './attendance.js'

const router = express.Router();  

router.use('/employees', employeeRoutes)
router.use('/attendance', attendanceRoutes)

export default router;
