import { Router } from 'express';
import {
  createUser, signInUser, getUser, updateUser, updatePasswordsUser,
} from '../controllers/userController.js';
import verifyToken from '../middlewares/verifyToken.js';

const routes = Router();

routes.post('/signin', signInUser);

routes.post('/', createUser);
routes.get('/', verifyToken, getUser);
routes.put('/', verifyToken, updateUser);
routes.put('/password', verifyToken, updatePasswordsUser);

export default routes;
