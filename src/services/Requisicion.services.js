import Requisicion from "../models/Requisicion.js";
import { sendRequisition } from '../services/dispatchApiLaboratorio.js';
import { sendRequisitionProveedor } from "../services/dispatchApiProveedores.js";
import { sendLogin } from "../services/dispatchApiAuth.js";
import { token } from "morgan";


//crear
export const crearRequisicion = async (data) => {
  try {
    const requisicion = await Requisicion.create(data);
    let dispatchResponse = null;

    if (requisicion.destino === 'LABORATORIO') {
      dispatchResponse = await sendRequisition(requisicion);
    }

    if (requisicion.destino === 'PROVEEDORES') {
      let token = await sendLogin();
      dispatchResponse = await sendRequisitionProveedor(requisicion, token);
    }

    return {
      requisicion,
      dispatchResponse
    };
  } catch (error) {
    throw new Error("Error al crear la requisición: " + error.message);
  }
};
//obtener
export const obtenerRequisiciones = async () => {
    try {
        return await Requisicion.findAll();
    } catch (error) {
        throw new Error("Error al obtener las requisiciones: " + error.message);
    }
};
//obtener por id
export const obtenerRequisicionPorId = async (id) => {
    try {
        const requisicion = await Requisicion.findByPk(id);
        if (!requisicion) {
            throw new Error("Requisición no encontrada");
        }
        return requisicion;
    } catch (error) {
        throw new Error("Error al obtener la requisición por ID: " + error.message);
    }
};
//actualizar
export const actualizarRequisicion = async (id, newData) => {
    try {
        const requisicion = await Requisicion.findByPk(id);
        if (!requisicion) {
            throw new Error("Requisición no encontrada");
        }
        await requisicion.update(newData);
        return requisicion;
    } catch (error) {
        throw new Error("Error al actualizar la requisición: " + error.message);
    }
};
//eliminar
export const eliminarRequisicion = async (id) => {
    try {
        const requisicion = await Requisicion.findByPk(id);
        if (!requisicion) {
            throw new Error("Requisición no encontrada");
        }
        await requisicion.destroy();
        return { mensaje: "Requisición eliminada correctamente" };
    } catch (error) {
        throw new Error("Error al eliminar la requisición: " + error.message);
    }
};
//buscar por estado
export const buscarPorEstado = async (estado) => {
    try {
        return await Requisicion.findAll({ where: { estado } });
    } catch (error) {
        throw new Error("Error al buscar por estado: " + error.message);
    }
};
//buscar por tipo
export const buscarPorTipo = async (tipo_requisicion) => {
    try {
        return await Requisicion.findAll({ where: { tipo_requisicion } });
    } catch (error) {
        throw new Error("Error al buscar por tipo de requisición: " + error.message);
    }
};
export default {
    crearRequisicion,
    obtenerRequisiciones,
    obtenerRequisicionPorId,
    actualizarRequisicion,
    eliminarRequisicion,
    buscarPorEstado,
    buscarPorTipo
    
};
