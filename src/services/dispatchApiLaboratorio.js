import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const sendRequisition = async (requisition, token) => {
  try {
    const payload = {
      codigoSerie: requisition.Producto_codigoSerie.codigoSerie,
      cantidad: requisition.Producto_codigoSerie.cantidad
      
    };

    const response = await axios.post(process.env.LABORATORIO_URL, payload,{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
    }
});
    return response.data;
  } catch (error) {
     console.error('Error al llamar a la API de despacho:', error.response?.data || error.message);
    throw new Error('Failed to send requisition to dispatch');
  }
};