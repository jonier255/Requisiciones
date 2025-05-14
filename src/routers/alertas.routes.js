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

// Crear una nueva alerta
router.post("/api/alertas", crearAlerta);


// Listar todas las alertas
router.get("/api/alertas", listarAlertas);

// Obtener una alerta por ID
router.get("/api/alerta/:id", obtenerAlerta);


// Actualizar una alerta por ID
router.put("/api/alerta/:id", actualizarAlerta);

// Eliminar una alerta por ID
router.delete("/api/alerta/:id", eliminarAlerta);

// Buscar alertas por estado
router.get("/api/alerta/estado/:estado", buscarAlertasPorEstado);

export default router;