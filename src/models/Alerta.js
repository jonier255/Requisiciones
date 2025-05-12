const { DataTypes } = require("sequelize")
const sequelize = require("../database/conexion")
const Requisicion = require("./Requisicion")

const Alerta = sequelize.sequelize.define("Alerta", {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    requisicion_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Requisicion,
            key: 'id'
        }
    },
    origen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_generacion: {
        type: DataTypes.TIME,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Alerta
Requisicion.hasOne(Alerta, {foreignKey: 'requisicion_id'})
Alerta.belongsTo(Requisicion, {foreignKey: 'requisicion_id'})