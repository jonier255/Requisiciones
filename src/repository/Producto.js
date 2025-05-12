// repositories/productoRepository.js
import Producto from "../models/Producto.js";

const productoRepository = {

  // Crear un nuevo producto
  async create(data) {
    return await Producto.create(data);
  },

  // Obtener todos los productos
  async findAll() {
    return await Producto.findAll();
  },

  // Obtener un producto por ID
  async findById(id) {
    return await Producto.findByPk(id);
  },

  // Actualizar un producto por ID
  async update(id, newData) {
    const producto = await Producto.findByPk(id);
    if (!producto) return null;
    return await producto.update(newData);
  },

  // Eliminar un producto por ID
  async delete(id) {
    const producto = await Producto.findByPk(id);
    if (!producto) return null;
    await producto.destroy();
    return true;
  },

  // Buscar productos por tipo
  async findByTipo(tipo) {
    return await Producto.findAll({ where: { tipo } });
  }
};

export default productoRepository;
