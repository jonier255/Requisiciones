import axios from 'axios';
import dotenv from 'dotenv';


dotenv.config();

export const sendLogin = async () => {
  try {
    const payload = {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD
    };

    const response = await axios.post(process.env.PROVEEDOR_LOGIN, payload);
    return response.data;
  } catch (error) {
     console.error('Error al llamar a la API de despacho:', error.response?.data || error.message);
    throw new Error('Failed to send requisition to dispatch');
  }
};