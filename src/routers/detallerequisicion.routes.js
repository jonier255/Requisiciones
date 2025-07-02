import express from "express";
import authMiddleware from '../middleware/auth.middleware.js';
import {
    crearDetalleRequisicion,
    buscarPorRequisicionId,
    // obtenerDetalleRequisicion,
    eliminarDetalleRequisicion
} from "../controllers/detallerequisicion.controller.js";

const router = express.Router();

// Crear detalle de requisición
router.post("/api/detallerequisicion", authMiddleware, crearDetalleRequisicion);

// Listar detalles de requisición por ID 
router.get("/api/detallerequisicion/:requisicion_id", buscarPorRequisicionId);

// Obtener detalle de requisición por ID
// router.get("/:id", obtenerDetalleRequisicion);

// Eliminar detalle de requisición por ID
router.delete("/api/detallerequisicion/:id", authMiddleware, eliminarDetalleRequisicion);

export default router;