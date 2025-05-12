import DetalleRequisicion from "../models/DetalleRequisicion.js";

const detalleRequisicionRepository = {

  // Crear nuevo detalle de requisición
  async create(data) {
    return await DetalleRequisicion.create(data);
  },

  // Obtener todos los detalles de requisición
  async findAll() {
    return await DetalleRequisicion.findAll();
  },

  // Obtener un detalle de requisición por ID
  async findById(id) {
    return await DetalleRequisicion.findByPk(id);
  },

  // Actualizar un detalle de requisición por ID
  async update(id, newData) {
    const detalle = await DetalleRequisicion.findByPk(id);
    if (!detalle) return null;
    return await detalle.update(newData);
  },
  
  // Eliminar un detalle de requisición por ID
  async delete(id) {
    const detalle = await DetalleRequisicion.findByPk(id);
    if (!detalle) return null;
    await detalle.destroy();
    return true;
  },

  // Buscar por id de requisición
  async findByRequisicionId(requisicion_id) {
    return await DetalleRequisicion.findAll({ where: { requisicion_id } });
  }
};

export default detalleRequisicionRepository;
