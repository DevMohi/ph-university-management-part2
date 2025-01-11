import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

//will call controller function
router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:studentId', StudentControllers.deleteStudent);

//router nijei ekta object
export const StudentRoutes = router;
