import express from "express";
import {
    crearRequisicion,
    listarRequisiciones,
    obtenerRequisicion,
    actualizarEstadoRequisicion,
    eliminarRequisicion
} from "../controllers/requisiciones.controller.js";

const router = express.Router();

// Crear requisición
router.post("/", crearRequisicion);

// Obtener todas las requisiciones
router.get("/", listarRequisiciones);

// Obtener requisición por ID
router.get("/:id", obtenerRequisicion);

// Actualizar requisición por ID
router.put("/:id", actualizarEstadoRequisicion);

// Eliminar requisición por ID
router.delete("/:id", eliminarRequisicion);

export default router;