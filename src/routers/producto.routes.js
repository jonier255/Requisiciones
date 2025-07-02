import express from "express";
import {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto,
    buscarProductosPorTipo
} from "../controllers/productos.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Crear producto
router.post("/api/producto", authMiddleware, crearProducto);

// Obtener todos los productos
router.get("/api/producto", obtenerProductos);

// Obtener producto por ID
router.get("/api/producto/:id", obtenerProductoPorId);

// Actualizar producto por ID
router.put("/api/producto/:id", authMiddleware, actualizarProducto);

// Eliminar producto por ID
router.delete("/api/producto/:id", authMiddleware, eliminarProducto);

// Buscar productos por tipo
router.get("/api/producto/tipo/:tipo", authMiddleware, buscarProductosPorTipo);

export default router;
