import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { createStudentValidationSchema } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

//will call controller function
router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

//router nijei ekta object
export const UserRoutes = router;
