// controllers/requisiciones.controller.js

const Requisicion = require('../models/Requisicion');
const DetalleRequisicion = require('../models/DetalleRequisicion'); // Necesario para crear detalles
const Producto = require('../models/Producto'); // Necesario para relacionar productos

// Controlador para la creación de una nueva requisición
exports.crearRequisicion = async (req, res) => {
    try {
        // 1. Validar los datos de entrada (puedes usar librerías como express-validator)
        const { tipo_requisicion, destino, observaciones, detalles } = req.body;

        if (!tipo_requisicion || !estado) { // Asumo que el estado inicial será 'pendiente'
            return res.status(400).json({ mensaje: 'El tipo de requisición y el estado son obligatorios.' });
        }

        // 2. Crear la requisición en la base de datos
        const nuevaRequisicion = await Requisicion.create({
            tipo_requisicion,
            estado: 'pendiente', // Estado inicial por defecto
            fecha_creacion: new Date(),
            destino,
            observaciones
        });

        // 3. Si se proporcionan detalles de la requisición, crearlos también
        if (detalles && Array.isArray(detalles)) {
            await Promise.all(detalles.map(async (detalle) => {
                const producto = await Producto.findByPk(detalle.producto_id);
                if (!producto) {
                    // Eliminar la requisición creada si un producto no existe
                    await nuevaRequisicion.destroy();
                    return res.status(400).json({ mensaje: `El producto con ID ${detalle.producto_id} no existe.` });
                }
                await DetalleRequisicion.create({
                    requisicion_id: nuevaRequisicion.id,
                    producto_id: detalle.producto_id
                });
            }));
        }

        // 4. Enviar una respuesta exitosa
        res.status(201).json({ mensaje: 'Requisición creada exitosamente.', requisicion: nuevaRequisicion });

        // Aquí iría la lógica para enviar el correo electrónico automático
        // (necesitarías configurar un servicio de correo y obtener las direcciones)
        console.log(`Simulando envío de correo para la requisición ID: ${nuevaRequisicion.id}`);

    } catch (error) {
        console.error('Error al crear la requisición:', error);
        res.status(500).json({ mensaje: 'Error al crear la requisición.' });
    }
};

// Controlador para listar todas las requisiciones
exports.listarRequisiciones = async (req, res) => {
    try {
        const requisiciones = await Requisicion.findAll({
            include: [{
                model: DetalleRequisicion,
                include: [Producto] // Incluir detalles y la información del producto
            }]
        });
        res.status(200).json(requisiciones);
    } catch (error) {
        console.error('Error al listar las requisiciones:', error);
        res.status(500).json({ mensaje: 'Error al listar las requisiciones.' });
    }
};

// Controlador para obtener una requisición específica por su ID
exports.obtenerRequisicion = async (req, res) => {
    const { id } = req.params;
    try {
        const requisicion = await Requisicion.findByPk(id, {
            include: [{
                model: DetalleRequisicion,
                include: [Producto]
            }]
        });
        if (!requisicion) {
            return res.status(404).json({ mensaje: 'Requisición no encontrada.' });
        }
        res.status(200).json(requisicion);
    } catch (error) {
        console.error('Error al obtener la requisición:', error);
        res.status(500).json({ mensaje: 'Error al obtener la requisición.' });
    }
};

// Controlador para actualizar el estado de una requisición
exports.actualizarEstadoRequisicion = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    try {
        const requisicion = await Requisicion.findByPk(id);
        if (!requisicion) {
            return res.status(404).json({ mensaje: 'Requisición no encontrada.' });
        }
        await requisicion.update({ estado });
        res.status(200).json({ mensaje: 'Estado de la requisición actualizado exitosamente.', requisicion });
    } catch (error) {
        console.error('Error al actualizar el estado de la requisición:', error);
        res.status(500).json({ mensaje: 'Error al actualizar el estado de la requisición.' });
    }
};