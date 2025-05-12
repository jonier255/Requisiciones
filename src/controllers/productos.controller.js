import ProductoService from "../services/Producto.services.js";

// Crear producto
export const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await ProductoService.crearProducto(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener todos los productos
export const obtenerProductos = async (req, res) => {
    try {
        const productos = await ProductoService.obtenerProductos();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener producto por ID
export const obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await ProductoService.obtenerProductoPorId(req.params.id);
        res.status(200).json(producto);
    } catch (error) {
        res.status(404).json({ mensaje: error.message });
    }
};

// Actualizar producto por ID
export const actualizarProducto = async (req, res) => {
    try {
        const productoActualizado = await ProductoService.actualizarProducto(req.params.id, req.body);
        res.status(200).json(productoActualizado);
    } catch (error) {
        res.status(404).json({ mensaje: error.message });
    }
};

// Eliminar producto por ID
export const eliminarProducto = async (req, res) => {
    try {
        const resultado = await ProductoService.eliminarProducto(req.params.id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(404).json({ mensaje: error.message });
    }
};

// Buscar productos por tipo
export const buscarProductosPorTipo = async (req, res) => {
    try {
        const productos = await ProductoService.buscarProductosPorTipo(req.params.tipo);
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
