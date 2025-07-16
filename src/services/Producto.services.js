import Producto from "../models/Producto.js"; 

//crear
export const crearProducto = async (data) => {
    try {
        const producto = await Producto.create(data);
        return producto;
    } catch (error) {
        throw new Error("Error al crear el producto: " + error.message);
    }
};
//obtener
export const obtenerProductos = async () => {
    try {
        return await Producto.findAll();
    } catch (error) {
        throw new Error("Error al obtener los productos: " + error.message);
    }
};
//obtener por id
export const obtenerProductoPorId = async (id) => {
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            throw new Error("Producto no encontrado");
        }
        return producto;
    } catch (error) {
        throw new Error("Error al buscar el producto por ID: " + error.message);
    }
};

//obtener por codigo
export const obtenerProductoPorCodigo = async (codigoSerie) => {
    try {
        const producto = await Producto.findOne({ where: { codigoSerie } });
        if (!producto) {
            throw new Error("Producto no encontrado");
        }
        return producto;
    } catch (error) {
        throw new Error("Error al buscar el producto por código: " + error.message);
    }
};
//actualizar
export const actualizarProducto = async (id, newData) => {
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            throw new Error("Producto no encontrado");
        }
        await producto.update(newData);
        return producto;
    } catch (error) {
        throw new Error("Error al actualizar el producto: " + error.message);
    }
};
//eliminar
export const eliminarProducto = async (id) => {
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            throw new Error("Producto no encontrado");
        }
        await producto.destroy();
        return { mensaje: "Producto eliminado correctamente" };
    } catch (error) {
        throw new Error("Error al eliminar el producto: " + error.message);
    }
};
//buscar por tipo
export const buscarProductosPorTipo = async (tipo) => {
    try {
        return await Producto.findAll({
            where: { tipo }
        });
    } catch (error) {
        throw new Error("Error al buscar productos por tipo: " + error.message);
    }
};

export default {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto,
    buscarProductosPorTipo
};
