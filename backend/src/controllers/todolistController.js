import mongoose from 'mongoose';
import ToDoList from '../models/ToDoList.js';

async function addTask(req, res) {
  const { id } = req;
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ code: 400, message: 'input is required' });
  }

  const createAt = new Date();

  const newTask = {
    _id: new mongoose.Types.ObjectId(),
    text,
    createAt,
    updateAt: createAt,
  };

  const ListsUser = await ToDoList.findById(id);
  const TasksUser = ListsUser.tasks;

  // eslint-disable-next-line max-len
  const TaskAlreadyExist = TasksUser.filter((task) => task.text.toLowerCase() === text.toLowerCase());
  if (TaskAlreadyExist.length === 1) {
    return res.status(400).json({ code: 400, message: 'task already exist' });
  }

  TasksUser.push(newTask);
  ListsUser.save();
  return res.status(201).json({ code: 201, message: 'added task' });
}

async function updateTask(req, res) {
  const { id } = req;
  const { idTask } = req.params;

  const ListsUser = await ToDoList.findById(id);
  const TaskUser = ListsUser.tasks.find((task) => task.id === idTask);

  if (!TaskUser) {
    return res.status(404).json({ code: 404, message: 'update task failed' });
  }

  if (TaskUser.finished) {
    TaskUser.finished = false;
    const IndexTaskHistory = ListsUser.history.findIndex((task) => task._id === idTask);
    ListsUser.history.splice(IndexTaskHistory, 1);
    ListsUser.save();
    return res.status(200).json({ code: 200, message: 'you not finish task' });
  }

  TaskUser.finished = true;
  const createAt = new Date();
  ListsUser.history.unshift({
    _id: TaskUser._id,
    text: TaskUser.text,
    createAt,
    updateAt: createAt,
  });
  ListsUser.save();
  return res.status(200).json({ code: 200, message: 'you finished task' });
}

async function deleteTask(req, res) {
  const { id } = req;
  const { idTask } = req.params;

  const ListsUser = await ToDoList.findById(id);
  const IndexTask = ListsUser.tasks.findIndex((task) => task.id === idTask);

  if (IndexTask === -1) {
    return res.status(404).json({ code: 404, message: 'delete task failed' });
  }

  ListsUser.tasks.splice(IndexTask, 1);
  ListsUser.save();
  return res.status(201).json({ code: 201, message: 'task deleted' });
}

export { addTask, updateTask, deleteTask };
