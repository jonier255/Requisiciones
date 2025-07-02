import express from "express";
import authMiddleware from '../middleware/auth.middleware.js';
import {
    listarAlertas,
    obtenerAlerta,
    crearAlerta,
    actualizarAlerta,
    eliminarAlerta,
    buscarAlertasPorEstado
} from "../controllers/alerta.controller.js";

const router = express.Router();

// Crear una nueva alerta
router.post("/api/alertas", authMiddleware, crearAlerta);


// Listar todas las alertas
router.get("/api/alertas", listarAlertas);

// Obtener una alerta por ID
router.get("/api/alerta/:id", obtenerAlerta);


// Actualizar una alerta por ID
router.put("/api/alerta/:id", authMiddleware, actualizarAlerta);

// Eliminar una alerta por ID
router.delete("/api/alerta/:id", eliminarAlerta);

// Buscar alertas por estado
router.get("/api/alerta/estado/:estado", buscarAlertasPorEstado);

export default router;