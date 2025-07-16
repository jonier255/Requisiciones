import axios from 'axios';
import dotenv from 'dotenv';
import { obtenerProductoPorCodigo } from './Producto.services.js';


dotenv.config();

export const sendRequisitionProveedor = async (requisition, token) => {
    let producto = await obtenerProductoPorCodigo(requisition.Producto_codigoSerie);
  try {
    const payload = {
    producto : producto.nombre,
    cantidad: producto.cantidad,
    urgencia: requisition.urgencia,
      
    };

    const response = await axios.post(process.env.PROVEEDOR_URL, payload,{
        headers: {
            'Authorization': `Bearer ${token.access}`,
            'Content-Type': 'application/json'
    }
});
    return response.data;
  } catch (error) {
     console.error('Error al llamar a la API de despacho:', error.response?.data || error.message);
    throw new Error('Failed to send requisition to dispatch');
  }
};