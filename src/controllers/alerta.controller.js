import AlertaService from "../services/Alerta.services.js";

// Listar todas las alertas
export const listarAlertas = async (req, res) => {
    try {
        const alertas = await AlertaService.obtenerAlertas();
        res.status(200).json(alertas);
    } catch (error) {
        console.error('Error al listar las alertas:', error.message);
        res.status(500).json({ mensaje: 'Error al listar las alertas.' });
    }
};

// Obtener una alerta por ID
export const obtenerAlerta = async (req, res) => {
    const { id } = req.params;
    try {
        const alerta = await AlertaService.obtenerAlertaPorId(id);
        res.status(200).json(alerta);
    } catch (error) {
        console.error('Error al obtener la alerta:', error.message);
        res.status(404).json({ mensaje: error.message });
    }
};

// Crear una alerta
export const crearAlerta = async (req, res) => {
    try {
        const nuevaAlerta = await AlertaService.crearAlerta(req.body);
        res.status(201).json(nuevaAlerta);
    } catch (error) {
        console.error('Error al crear la alerta:', error.message);
        res.status(500).json({ mensaje: error.message });
    }
};

// Actualizar una alerta
export const actualizarAlerta = async (req, res) => {
    const { id } = req.params;
    try {
        const alertaActualizada = await AlertaService.actualizarAlerta(id, req.body);
        res.status(200).json(alertaActualizada);
    } catch (error) {
        console.error('Error al actualizar la alerta:', error.message);
        res.status(404).json({ mensaje: error.message });
    }
};

// Eliminar una alerta
export const eliminarAlerta = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await AlertaService.eliminarAlerta(id);
        res.status(200).json(resultado);
    } catch (error) {
        console.error('Error al eliminar la alerta:', error.message);
        res.status(404).json({ mensaje: error.message });
    }
};

// Buscar alertas por estado
export const buscarAlertasPorEstado = async (req, res) => {
    const { estado } = req.params;
    try {
        const alertas = await AlertaService.buscarAlertasPorEstado(estado);
        res.status(200).json(alertas);
    } catch (error) {
        console.error('Error al buscar alertas por estado:', error.message);
        res.status(500).json({ mensaje: error.message });
    }
};