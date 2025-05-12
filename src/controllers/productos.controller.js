// controllers/productos.controller.js

const Producto = require('../models/Producto');


// CRUD

exports.listarProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al listar los productos:', error);
        res.status(500).json({ mensaje: 'Error al listar los productos.' });
    }
};

exports.obtenerProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado.' });
        }
        res.status(200).json(producto);
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ mensaje: 'Error al obtener el producto.' });
    }
};

// Si necesitas crear productos
exports.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ mensaje: 'Error al crear el producto.' });
    }
};

// Si necesitas actualizar productos
exports.actualizarProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const [filasActualizadas] = await Producto.update(req.body, {
            where: { id }
        });
        if (filasActualizadas > 0) {
            const productoActualizado = await Producto.findByPk(id);
            res.status(200).json(productoActualizado);
        } else {
            res.status(404).json({ mensaje: 'Producto no encontrado.' });
        }
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).json({ mensaje: 'Error al actualizar el producto.' });
    }
};

// Si necesitas eliminar productos
exports.eliminarProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const filasEliminadas = await Producto.destroy({
            where: { id }
        });
        if (filasEliminadas > 0) {
            res.status(204).send(); // Sin contenido
        } else {
            res.status(404).json({ mensaje: 'Producto no encontrado.' });
        }
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ mensaje: 'Error al eliminar el producto.' });
    }
};

// Sección 2: Controladores adicionales
exports.obtenerCantidadProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id, { attributes: ['cantidad'] }); 
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado.' });
        }
        res.status(200).json({ cantidad: producto.cantidad });
    } catch (error) {
        console.error('Error al obtener la cantidad del producto:', error);
        res.status(500).json({ mensaje: 'Error al obtener la cantidad del producto.' });
    }
};

exports.verificarUmbralProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado.' });
        }
        // Aquí necesitarías acceder al umbral del producto (podría ser otro campo en el modelo Producto)
        const umbral = producto.umbral_minimo || 0; // Asumiendo un campo 'umbral_minimo'
        const enUmbral = producto.cantidad <= umbral;
        res.status(200).json({ enUmbral });
    } catch (error) {
        console.error('Error al verificar el umbral del producto:', error);
        res.status(500).json({ mensaje: 'Error al verificar el umbral del producto.' });
    }
};

exports.actualizarCantidadProducto = async (req, res) => {
    const { id } = req.params;
    const { cantidad } = req.body;
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado.' });
        }
        await producto.update({ cantidad });
        res.status(200).json({ mensaje: 'Cantidad del producto actualizada exitosamente.', cantidad });
    } catch (error) {
        console.error('Error al actualizar la cantidad del producto:', error);
        res.status(500).json({ mensaje: 'Error al actualizar la cantidad del producto.' });
    }
};