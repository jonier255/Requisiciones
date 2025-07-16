import axios from 'axios';
import dotenv from 'dotenv';
import {obtenerProductoPorCodigo } from './Producto.services.js';

dotenv.config();

export const sendRequisition = async (requisition) => {
    let producto = await obtenerProductoPorCodigo(requisition.Producto_codigoSerie);
    
  try {
    const payload = {
      codigoSerie: producto.codigoSerie,
      cantidad: producto.cantidad,
    };


    const response = await axios.post(process.env.LABORATORIO_URL, payload)
    return response.data;
  } catch (error) {
     console.error('Error al llamar a la API de despacho:', error.response?.data || error.message);
    throw new Error('Failed to send requisition to dispatch');
  }
};