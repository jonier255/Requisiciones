import express from "express";
import {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto,
    buscarProductosPorTipo
} from "../controllers/productos.controller.js";

const router = express.Router();

// Crear producto
router.post("/api/producto", crearProducto);

// Obtener todos los productos
router.get("/api/producto", obtenerProductos);

// Obtener producto por ID
router.get("/api/producto/:id", obtenerProductoPorId);

// Actualizar producto por ID
router.put("/api/producto/:id", actualizarProducto);

// Eliminar producto por ID
router.delete("/api/producto/:id", eliminarProducto);

// Buscar productos por tipo
router.get("/api/producto/tipo/:tipo", buscarProductosPorTipo);

export default router;
