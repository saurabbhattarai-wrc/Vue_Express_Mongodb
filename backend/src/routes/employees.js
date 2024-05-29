import express from 'express';
import { addEmployee} from '../../controllers/employeeController.js';
import { getAllEmployees } from '../../controllers/employeeController.js';

const router = express.Router();  

router.get('/', getAllEmployees)
router.post('/', addEmployee)
// router.get('/:id', show)
// router.put('/:id', updateAttendance)
// router.delete('/:id', deleteEmployee)

export default router;
