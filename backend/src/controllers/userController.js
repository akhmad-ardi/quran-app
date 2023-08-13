import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Bookmark from '../models/Bookmark.js';
import ToDoList from '../models/ToDoList.js';

async function createUser(req, res) {
  const {
    firstName, lastName, username, email, password, verifyPassword,
  } = req.body;

  if (!firstName && !lastName && !username && !email && !password) {
    return res.status(400).json({ code: 400, message: 'all input is required' });
  }

  if (!firstName) {
    return res.status(400).json({ code: 400, message: 'first name is required' });
  }
  if (!lastName) {
    return res.status(400).json({ code: 400, message: 'last name is required' });
  }
  if (!username) {
    return res.status(400).json({ code: 400, message: 'username is required' });
  }
  if (!email) {
    return res.status(400).json({ code: 400, message: 'email is required' });
  }
  if (!password) {
    return res.status(400).json({ code: 400, message: 'password is required' });
  }

  if (password !== verifyPassword) {
    return res.status(400).json({ code: 400, message: 'password invalid' });
  }

  const emailAlreadyExist = await User.findOne({ email });
  if (emailAlreadyExist) {
    return res.status(400).json({ code: 400, message: 'email already exist' });
  }

  const newUser = new User({
    firstName,
    lastName,
    username,
    email,
    password: await bcrypt.hash(password, 10),
  });

  const newBoookmark = new Bookmark({
    _id: newUser._id,
  });

  const newToDoList = new ToDoList({
    _id: newUser._id,
  });

  newUser.save();
  newBoookmark.save();
  newToDoList.save();
  return res.status(201).json({ code: 201, message: 'user created' });
}

async function signInUser(req, res) {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(400).json({ code: 400, message: 'all input is required' });
  }

  if (!email) {
    return res.status(400).json({ code: 400, message: 'email is required' });
  }

  if (!password) {
    return res.status(400).json({ code: 400, message: 'password is required' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ code: 400, message: 'email or password invalid' });
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(400).json({ code: 400, message: 'email or password invalid' });
  }

  const Token = jwt.sign({ _id: user._id }, process.env.TOKEN_KEY, { expiresIn: '2h' });
  res.cookie('TokenUser', Token, { maxAge: 7200000 });
  return res.status(200).json({ status: 200, message: 'Welcome 🙌' });
}

async function getUser(req, res) {
  const { id } = req;

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ code: 404, message: 'user not found' });
  }

  const bookmark = await Bookmark.findById(id);
  const todolist = await ToDoList.findById(id);
  return res.status(200).json({ code: 200, message: 'getted user', data: { user, bookmark, todolist } });
}

async function updateUser(req, res) {
  const { id } = req;

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ code: 404, message: 'update user failed' });
  }

  const {
    firstName, lastName, username, email,
  } = req.body;

  if (!firstName && !lastName && !username && !email) {
    return res.status(400).json({ code: 400, message: 'all input is required' });
  }

  if (!firstName) {
    return res.status(400).json({ code: 400, message: 'first name is required' });
  }
  if (!lastName) {
    return res.status(400).json({ code: 400, message: 'last name is required' });
  }
  if (!username) {
    return res.status(400).json({ code: 400, message: 'username is required' });
  }
  if (!email) {
    return res.status(400).json({ code: 400, message: 'email is required' });
  }

  const emailAlreadyExist = await User.findOne({ email });
  if (emailAlreadyExist && emailAlreadyExist._id.toString() !== id) {
    return res.status(400).json({ code: 400, message: 'email already exist' });
  }

  user.firstName = firstName;
  user.lastName = lastName;
  user.username = username;
  user.email = email;

  user.save();
  return res.status(201).json({ code: 201, message: 'user updated' });
}

async function updatePasswordsUser(req, res) {
  const { id } = req;

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ code: 404, message: "update password's user failed" });
  }

  const { oldPassword, newPassword, verifyPassword } = req.body;

  if (!newPassword && !verifyPassword && !oldPassword) {
    return res.status(400).json({ code: 400, message: 'all input is required' });
  }

  if (!oldPassword) {
    return res.status(400).json({ code: 400, message: 'old password is required' });
  }

  if (!newPassword) {
    return res.status(400).json({ code: 400, message: 'new password is required' });
  }

  if (!verifyPassword) {
    return res.status(400).json({ code: 400, message: 'verify password is required' });
  }

  if (newPassword !== verifyPassword) {
    return res.status(400).json({ code: 400, message: 'password is invalid' });
  }

  const checkPassword = await bcrypt.compare(oldPassword, user.password);

  if (!checkPassword) {
    return res.status(400).json({ status: 400, message: 'password is invalid!!!' });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;

  user.save();
  return res.status(201).json({ code: 201, message: 'password changed' });
}

export {
  createUser, signInUser, getUser, updateUser, updatePasswordsUser,
};
