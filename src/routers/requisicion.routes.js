import express from "express";
import {
    crearRequisicion,
    listarRequisiciones,
    obtenerRequisicion,
    actualizarRequisicion,
    eliminarRequisicion
} from "../controllers/requisiciones.controller.js";

const router = express.Router();

// Crear requisición
router.post("/api/requisicion", crearRequisicion);

// Obtener todas las requisiciones
router.get("/api/requisiciones", listarRequisiciones);

// Obtener requisición por ID
router.get("/api/requisicion/:id", obtenerRequisicion);

// Actualizar requisición por ID
router.put("/api/requisicion/:id", actualizarRequisicion);

// Eliminar requisición por ID
router.delete("/api/requisicion/:id", eliminarRequisicion);

export default router;