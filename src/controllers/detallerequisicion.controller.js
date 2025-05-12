import DetalleRequisicionService from "../services/DetalleRequisicion.services.js"

// Crear detalle de requisición
export const crearDetalleRequisicion = async (req, res) => {
    try {
        const nuevoDetalle = await DetalleRequisicionService.crearDetalleRequisicion(req.body);
        res.status(201).json(nuevoDetalle);
    } catch (error) {
        console.error('Error al crear el detalle de requisición:', error.message);
        res.status(500).json({ mensaje: error.message });
    }
};

// // Listar detalles de requisición por ID de requisición
// export const buscarPorRequisicionId = async (req, res) => {
//     try {
//         const detalles = await DetalleRequisicionService.buscarPorRequisicionId(req.params.requisicionId);
//         res.status(200).json(detalles);
//     } catch (error) {
//         console.error('Error al listar los detalles de la requisición:', error.message);
//         res.status(500).json({ mensaje: 'Error al listar los detalles de la requisición.' });
//     }
// };

// Obtener detalle de requisición por ID
export const buscarPorRequisicionId = async (req, res) => {
    try {
        const detalle = await DetalleRequisicionService.buscarPorRequisicionId(req.params.id);
        res.status(200).json(detalle);
    } catch (error) {
        console.error('Error al obtener el detalle de requisición:', error.message);
        res.status(404).json({ mensaje: 'Detalle de requisición no encontrado.' });
    }
};

// Eliminar detalle de requisición por ID
export const eliminarDetalleRequisicion = async (req, res) => {
    try {
        const resultado = await DetalleRequisicionService.eliminarDetalleRequisicion(req.params.id);
        res.status(200).json(resultado);
    } catch (error) {
        console.error('Error al eliminar el detalle de requisición:', error.message);
        res.status(404).json({ mensaje: 'Detalle de requisición no encontrado.' });
    }
};

