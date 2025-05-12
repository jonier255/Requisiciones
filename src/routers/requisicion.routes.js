import express from "express";
import {
    crearRequisicion,
    obtenerRequisiciones,
    obtenerRequisicionPorId,
    actualizarRequisicion,
    eliminarRequisicion
} from "../controllers/requisicion.controller.js";

const router = express.Router();

// Crear requisición
router.post("/", crearRequisicion);

// Obtener todas las requisiciones
router.get("/", obtenerRequisiciones);

// Obtener requisición por ID
router.get("/:id", obtenerRequisicionPorId);

// Actualizar requisición por ID
router.put("/:id", actualizarRequisicion);

// Eliminar requisición por ID
router.delete("/:id", eliminarRequisicion);

export default router;