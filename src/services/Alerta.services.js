import Alerta from "../models/Alerta.js";

//crear alerta
export const crearAlerta = async (data) => {
    try {
        const alerta = await Alerta.create(data);
        return alerta;
    } catch (error) {
        throw new Error("Error al crear la alerta: " + error.message);
    }
};
//Obtener todas las alertas
export const obtenerAlertas = async () => {
    try {
        return await Alerta.findAll();
    } catch (error) {
        throw new Error("Error al obtener las alertas: " + error.message);
    }
};
//Obtener las alertas especificamente por id
export const obtenerAlertaPorId = async (id) => {
    try {
        const alerta = await Alerta.findByPk(id);
        if (!alerta) {
            throw new Error("Alerta no encontrada");
        }
        return alerta;
    } catch (error) {
        throw new Error("Error al buscar la alerta por ID: " + error.message);
    }
};

//Actulizar alerta
export const actualizarAlerta = async (id, newData) => {
    try {
        const alerta = await Alerta.findByPk(id);
        if (!alerta) {
            throw new Error("Alerta no encontrada");
        }
        await alerta.update(newData);
        return alerta;
    } catch (error) {
        throw new Error("Error al actualizar la alerta: " + error.message);
    }
};

// Eliminar alerta
export const eliminarAlerta = async (id) => {
    try {
        const alerta = await Alerta.findByPk(id);
        if (!alerta) {
            throw new Error("Alerta no encontrada");
        }
        await alerta.destroy();
        return { mensaje: "Alerta eliminada correctamente" };
    } catch (error) {
        throw new Error("Error al eliminar la alerta: " + error.message);
    }
};
//Busqueda de alerta por estado
export const buscarAlertasPorEstado = async (estado) => {
    try {
        return await Alerta.findAll({
            where: { estado }
        });
    } catch (error) {
        throw new Error("Error al buscar alertas por estado: " + error.message);
    }
};

export default {
    crearAlerta,
    obtenerAlertas,
    obtenerAlertaPorId,
    actualizarAlerta,
    eliminarAlerta,
    buscarAlertasPorEstado
};
