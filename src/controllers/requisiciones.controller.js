import RequisicionService from "../services/requisicion.services.js";

// Crear requisición
export const crearRequisicion = async (req, res) => {
    try {
        const nuevaRequisicion = await RequisicionService.crearRequisicion(req.body);
        res.status(201).json(nuevaRequisicion);
    } catch (error) {
        console.error('Error al crear la requisición:', error.message);
        res.status(500).json({ mensaje: error.message });
    }
};

// Listar todas las requisiciones
export const listarRequisiciones = async (req, res) => {
    try {
        const requisiciones = await RequisicionService.obtenerRequisiciones();
        res.status(200).json(requisiciones);
    } catch (error) {
        console.error('Error al listar las requisiciones:', error.message);
        res.status(500).json({ mensaje: 'Error al listar las requisiciones.' });
    }
};

// Obtener una requisición por ID
export const obtenerRequisicion = async (req, res) => {
    try {
        const requisicion = await RequisicionService.obtenerRequisicionPorId(req.params.id);
        res.status(200).json(requisicion);
    } catch (error) {
        console.error('Error al obtener la requisición:', error.message);
        res.status(404).json({ mensaje: 'Requisición no encontrada.' });
    }
};

// Actualizar estado de requisición
export const actualizarEstadoRequisicion = async (req, res) => {
    try {
        const requisicionActualizada = await RequisicionService.actualizarEstadoRequisicion(req.params.id, req.body.estado);
        res.status(200).json(requisicionActualizada);
    } catch (error) {
        console.error('Error al actualizar el estado de la requisición:', error.message);
        res.status(404).json({ mensaje: 'Requisición no encontrada.' });
    }
};

// Eliminar requisición
export const eliminarRequisicion = async (req, res) => {
    try {
        const resultado = await RequisicionService.eliminarRequisicion(req.params.id);
        res.status(200).json(resultado);
    } catch (error) {
        console.error('Error al eliminar la requisición:', error.message);
        res.status(404).json({ mensaje: 'Requisición no encontrada.' });
    }
};