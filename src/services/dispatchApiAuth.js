import axios from 'axios';
import dotenv from 'dotenv';


dotenv.config();

export const sendLogin = async () => {
    console.log('Username:', process.env.USERNAME_PROVEEDOR);
    console.log('Password:', process.env.PASSWORD);
    console.log('Login URL:', process.env.PROVEEDOR_LOGIN);
  try {
    const payload = {
    username: process.env.USERNAME_PROVEEDOR,
    password: process.env.PASSWORD
    };

    const response = await axios.post(process.env.PROVEEDOR_LOGIN, payload);
    return response.data;
  } catch (error) {
     console.error('Error al llamar a la API de login:', error.response?.data || error.message);
    throw new Error('Failed to send requisition to dispatch');
  }
};