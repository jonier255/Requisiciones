import Requisicion from "../models/Requisicion.js";

const requisicionRepository = {

  // Crear nueva requisición
  async create(data) {
    return await Requisicion.create(data);
  },

  // Obtener todas las requisiciones
  async findAll() {
    return await Requisicion.findAll();
  },

  // Obtener una requisición por ID
  async findById(id) {
    return await Requisicion.findByPk(id);
  },

  // Actualizar una requisición por ID
  async update(id, newData) {
    const requisicion = await Requisicion.findByPk(id);
    if (!requisicion) return null;
    return await requisicion.update(newData);
  },

  // Eliminar una requisición por ID
  async delete(id) {
    const requisicion = await Requisicion.findByPk(id);
    if (!requisicion) return null;
    await requisicion.destroy();
    return true;
  },

  // Buscar por estado
  async findByEstado(estado) {
    return await Requisicion.findAll({ where: { estado } });
  },

  // Buscar por tipo de requisición
  async findByTipo(tipo_requisicion) {
    return await Requisicion.findAll({ where: { tipo_requisicion } });
  }
};

export default requisicionRepository;
