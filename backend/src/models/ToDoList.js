import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TodolistSchema = new Schema({
  _id: String,
  tasks: {
    type: [{
      _id: String,
      text: { type: String, required: true },
      finished: { type: Boolean, default: false },
      createAt: Date,
      updateAt: Date,
    }],
    default: [],
  },
  history: {
    type: [{
      _id: String,
      text: String,
      createAt: Date,
      updateAt: Date,
    }],
    default: [],
  },
});

const ToDoList = model('ToDoList', TodolistSchema);

export default ToDoList;
