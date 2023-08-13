import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  email: {
    type: String, lowercase: true, unique: true, required: true,
  },
  password: { type: String, required: true },
});

const User = model('User', UserSchema);

export default User;
