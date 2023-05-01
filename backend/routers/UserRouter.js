import express from 'express';
import UserController from '../controllers/UserController.js';

import signInValidation from '../middlewares/user/signInValidation.js';

const router = express.Router();

router.post('/signin', signInValidation, UserController.signIn);

router.post('/signout', UserController.signOut);

export default router;
