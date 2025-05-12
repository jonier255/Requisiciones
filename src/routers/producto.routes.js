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
router.post("/", crearProducto);

// Obtener todos los productos
router.get("/", obtenerProductos);

// Obtener producto por ID
router.get("/:id", obtenerProductoPorId);

// Actualizar producto por ID
router.put("/:id", actualizarProducto);

// Eliminar producto por ID
router.delete("/:id", eliminarProducto);

// Buscar productos por tipo
router.get("/tipo/:tipo", buscarProductosPorTipo);

export default router;
