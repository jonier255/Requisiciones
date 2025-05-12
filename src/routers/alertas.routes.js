import express from "express";
import {
    listarAlertas,
    obtenerAlerta,
    crearAlerta,
    actualizarAlerta,
    eliminarAlerta,
    buscarAlertasPorEstado
} from "../controllers/alerta.controller.js";

const router = express.Router();

// Listar todas las alertas
router.get("/", listarAlertas);

// Obtener una alerta por ID
router.get("/:id", obtenerAlerta);

// Crear una nueva alerta
router.post("/", crearAlerta);

// Actualizar una alerta por ID
router.put("/:id", actualizarAlerta);

// Eliminar una alerta por ID
router.delete("/:id", eliminarAlerta);

// Buscar alertas por estado
router.get("/estado/:estado", buscarAlertasPorEstado);

export default router;