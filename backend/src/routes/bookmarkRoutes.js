import { Router } from 'express';
import { updateBookmark, resetBookmark } from '../controllers/bookmarkController.js';
import verifyToken from '../middlewares/verifyToken.js';

const routes = Router();

routes.patch('/', verifyToken, updateBookmark);
routes.delete('/', verifyToken, resetBookmark);

export default routes;
