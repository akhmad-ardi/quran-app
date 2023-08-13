import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import database from './config/database.js';

import userRoutes from './routes/userRoutes.js';
import bookmarkRoutes from './routes/bookmarkRoutes.js';
import todolistRoutes from './routes/todolistRoutes.js';
import verifyToken from './middlewares/verifyToken.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

database();

app.use('/api/user', userRoutes);
app.use('/api/bookmark', bookmarkRoutes);
app.use('/api/todolist', todolistRoutes);

app.get('/api/token', verifyToken, (req, res) => res.json({ code: 200, isAuth: true }));
app.delete('/api/token', (req, res) => {
  res.clearCookie('TokenUser');
  return res.status(200).json({ code: 200, message: 'cookies cleared' });
});

app.use((req, res) => res.status(404).json({ code: 404, message: 'not found' }));

export default app;
