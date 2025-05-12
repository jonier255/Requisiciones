const DetalleRequisicion = require('../models/DetalleRequisicion');
const Requisicion = require('../models/Requisicion');
const Producto = require('../models/Producto');

exports.crearDetalleRequisicion = async (req, res) => {
    try {
        const { requisicion_id, producto_id } = req.body;

        const requisicionExiste = await Requisicion.findByPk(requisicion_id);
        const productoExiste = await Producto.findByPk(producto_id);
        if (!requisicionExiste || !productoExiste) {
            return res.status(400).json({ mensaje: 'La requisición o el producto no existen.' });
        }

        const nuevoDetalle = await DetalleRequisicion.create({ requisicion_id, producto_id });
        res.status(201).json(nuevoDetalle);
    } catch (error) {
        console.error('Error al crear el detalle de requisición:', error);
        res.status(500).json({ mensaje: 'Error al crear el detalle de requisición.' });
    }
};

exports.listarDetallesPorRequisicion = async (req, res) => {
    const { requisicionId } = req.params;
    try {
        const detalles = await DetalleRequisicion.findAll({
            where: { requisicion_id: requisicionId },
            include: [Producto]
        });
        res.status(200).json(detalles);
    } catch (error) {
        console.error(`Error al listar los detalles de la requisición ${requisicionId}:`, error);
        res.status(500).json({ mensaje: 'Error al listar los detalles de la requisición.' });
    }
};

exports.obtenerDetalleRequisicion = async (req, res) => {
    const { id } = req.params;
    try {
        const detalle = await DetalleRequisicion.findByPk(id, { include: [Producto, Requisicion] });
        if (!detalle) {
            return res.status(404).json({ mensaje: 'Detalle de requisición no encontrado.' });
        }
        res.status(200).json(detalle);
    } catch (error) {
        console.error('Error al obtener el detalle de requisición:', error);
        res.status(500).json({ mensaje: 'Error al obtener el detalle de requisición.' });
    }
};

// No habría una función de "actualizar" significativa sin campos adicionales

exports.eliminarDetalleRequisicion = async (req, res) => {
    const { id } = req.params;
    try {
        const filasEliminadas = await DetalleRequisicion.destroy({
            where: { id }
        });
        if (filasEliminadas > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ mensaje: 'Detalle de requisición no encontrado.' });
        }
    } catch (error) {
        console.error('Error al eliminar el detalle de requisición:', error);
        res.status(500).json({ mensaje: 'Error al eliminar el detalle de requisición.' });
    }
};

