import express from "express";
import {
    crearRequisicion,
    listarRequisiciones,
    obtenerRequisicion,
    actualizarRequisicion,
    eliminarRequisicion
} from "../controllers/requisiciones.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Crear requisición
router.post("/api/requisicion", authMiddleware, crearRequisicion);

// Obtener todas las requisiciones
router.get("/api/requisiciones", listarRequisiciones);

// Obtener requisición por ID
router.get("/api/requisicion/:id", obtenerRequisicion);

// Actualizar requisición por ID
router.put("/api/requisicion/:id", authMiddleware, actualizarRequisicion);

// Eliminar requisición por ID
router.delete("/api/requisicion/:id", authMiddleware, eliminarRequisicion);

export default router;