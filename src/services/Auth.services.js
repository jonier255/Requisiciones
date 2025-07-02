import jwt from 'jsonwebtoken';
import { findByEmail, createUser } from '../repository/User.js'; // 👈 ya no es "default"
import dotenv from 'dotenv';
dotenv.config();

const register = async (username, email, password) => {
  const existingUser = await findByEmail(email);
  if (existingUser) throw new Error('Email ya registrado');

  const newUser = await createUser({ username, email, password });
  return { id: newUser.id, username: newUser.username };
};

const login = async (email, password) => {
  const user = await findByEmail(email);
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Credenciales incorrectas');
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token };
};

export default {
  register,
  login,
};

