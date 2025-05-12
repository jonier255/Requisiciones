const Alerta = require('../models/Alerta');
const Requisicion = require('../models/Requisicion'); // Si quieres incluir información de la requisición

exports.listarAlertas = async (req, res) => {
    try {
        const alertas = await Alerta.findAll({
            include: [{
                model: Requisicion,
                // Opciones para incluir información relacionada de la requisición si es necesario
            }]
        });
        res.status(200).json(alertas);
    } catch (error) {
        console.error('Error al listar las alertas:', error);
        res.status(500).json({ mensaje: 'Error al listar las alertas.' });
    }
};

exports.obtenerAlerta = async (req, res) => {
    const { id } = req.params;
    try {
        const alerta = await Alerta.findByPk(id, {
            include: [{
                model: Requisicion,
                // Opciones para incluir información relacionada de la requisición si es necesario
            }]
        });
        if (!alerta) {
            return res.status(404).json({ mensaje: 'Alerta no encontrada.' });
        }
        res.status(200).json(alerta);
    } catch (error) {
        console.error('Error al obtener la alerta:', error);
        res.status(500).json({ mensaje: 'Error al obtener la alerta.' });
    }
};