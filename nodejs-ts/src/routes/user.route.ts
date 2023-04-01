import express from 'express';
import asyncHandler from 'express-async-handler';
import { userController } from '../controllers';

const router = express.Router();

router.get('/', asyncHandler(userController.getUsers));

export default router;
