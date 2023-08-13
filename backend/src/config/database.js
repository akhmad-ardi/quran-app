/* eslint-disable no-console */
import 'dotenv/config';
import mongoose from 'mongoose';

const database = () => {
  try {
    mongoose.connect(process.env.URI);
    console.log('Database connected');
  } catch (error) {
    console.log(error);
  }
};

export default database;
