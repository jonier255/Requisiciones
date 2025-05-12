const { DataTypes } = require("sequelize")
const sequelize = require("../database/conexion")
const Requisicion = require("./Requisicion")
const Producto = require("./Producto")

const DetalleRequisicion = sequelize.sequelize.define("DetalleRequisicion", {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    requisicion_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Requisicion,
            key: 'id'
        }
    },
    producto_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Producto,
            key: 'id'
        }
    }
})

module.exports = DetalleRequisicion
Requisicion.hasOne(DetalleRequisicion, {foreignKey: 'requisicion_id'})
Producto.hasMany(Producto, {foreignKey: 'producto_id'})
DetalleRequisicion.belongsTo(Requisicion, {foreignKey: 'requisicion_id'})
DetalleRequisicion.belongsTo(Producto, {foreignKey: 'producto_id'}) 