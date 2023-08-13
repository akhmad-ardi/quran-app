import { Router } from 'express';
import { addTask, updateTask, deleteTask } from '../controllers/todolistController.js';
import verifyToken from '../middlewares/verifyToken.js';

const routes = Router();

routes.post('/', verifyToken, addTask);
routes.put('/:idTask', verifyToken, updateTask);
routes.delete('/:idTask', verifyToken, deleteTask);

export default routes;
