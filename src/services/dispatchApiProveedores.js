import axios from 'axios';
import dotenv from 'dotenv';


dotenv.config();

export const sendRequisitionProveedor = async (requisition) => {
  try {
    const payload = {
    producto : requisition.Producto_codigoSerie.nombre,
    cantidad: requisition.Producto_codigoSerie.cantidad,
    urgencia: requisition.Producto_codigoSerie.urgencia,
      
    };

    const response = await axios.post(process.env.PROVEEDOR_URL, payload);
    return response.data;
  } catch (error) {
     console.error('Error al llamar a la API de despacho:', error.response?.data || error.message);
    throw new Error('Failed to send requisition to dispatch');
  }
};