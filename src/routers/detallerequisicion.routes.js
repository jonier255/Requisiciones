import express from "express";
import {
    crearDetalleRequisicion,
    buscarPorRequisicionId,
    // obtenerDetalleRequisicion,
    eliminarDetalleRequisicion
} from "../controllers/detallerequisicion.controller.js";

const router = express.Router();

// Crear detalle de requisición
router.post("/", crearDetalleRequisicion);

// Listar detalles de requisición por ID 
router.get("/detallerequisicion/:requisicion_id", buscarPorRequisicionId);

// Obtener detalle de requisición por ID
// router.get("/:id", obtenerDetalleRequisicion);

// Eliminar detalle de requisición por ID
router.delete("/:id", eliminarDetalleRequisicion);

export default router;