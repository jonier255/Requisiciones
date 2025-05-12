import Alerta from "../models/Alerta.js";

const alertaRepository = {

  // Crear una nueva alert
  async create(data) {
    return await Alerta.create(data);
  },

  // Obtener todas las alertas
  async findAll() {
    return await Alerta.findAll();
  },

  // Obtener una alerta por ID
  async findById(id) {
    return await Alerta.findByPk(id);
  },

  // Actualizar una alerta por ID
  async update(id, newData) {
    const alerta = await Alerta.findByPk(id);
    if (!alerta) return null;
    return await alerta.update(newData);
  },

  // Eliminar una alerta por ID
  async delete(id) {
    const alerta = await Alerta.findByPk(id);
    if (!alerta) return null;
    await alerta.destroy();
    return true;
  },
  
  // Buscar alertas por estado
  async findByEstado(estado) {
    return await Alerta.findAll({ where: { estado } });
  }
};

export default alertaRepository;
