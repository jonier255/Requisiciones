import DetalleRequisicion from "../models/DetalleRequisicion";

export const crearDetalleRequisicion = async (data) => {
    try {
        const detalle = await DetalleRequisicion.create(data);
        return detalle;
    } catch (error) {
        throw new Error("Error al crear el detalle de requisición: " + error.message);
    }
};

export const obtenerDetalles = async () => {
    try {
        return await DetalleRequisicion.findAll();
    } catch (error) {
        throw new Error("Error al obtener los detalles de requisición: " + error.message);
    }
};

export const obtenerDetallePorId = async (id) => {
    try {
        const detalle = await DetalleRequisicion.findByPk(id);
        if (!detalle) {
            throw new Error("Detalle no encontrado");
        }
        return detalle;
    } catch (error) {
        throw new Error("Error al obtener el detalle por ID: " + error.message);
    }
};

export const actualizarDetalle = async (id, newData) => {
    try {
        const detalle = await DetalleRequisicion.findByPk(id);
        if (!detalle) {
            throw new Error("Detalle no encontrado");
        }
        await detalle.update(newData);
        return detalle;
    } catch (error) {
        throw new Error("Error al actualizar el detalle: " + error.message);
    }
};

export const eliminarDetalle = async (id) => {
    try {
        const detalle = await DetalleRequisicion.findByPk(id);
        if (!detalle) {
            throw new Error("Detalle no encontrado");
        }
        await detalle.destroy();
        return { mensaje: "Detalle eliminado correctamente" };
    } catch (error) {
        throw new Error("Error al eliminar el detalle: " + error.message);
    }
};

export const buscarPorRequisicionId = async (requisicion_id) => {
    try {
        return await DetalleRequisicion.findAll({
            where: { requisicion_id }
        });
    } catch (error) {
        throw new Error("Error al buscar detalles por requisición ID: " + error.message);
    }
};

export default {
    crearDetalleRequisicion,
    obtenerDetalles,
    obtenerDetallePorId,
    actualizarDetalle,
    eliminarDetalle,
    buscarPorRequisicionId
};
