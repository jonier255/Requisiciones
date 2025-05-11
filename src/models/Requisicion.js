const { DataTypes } = require("sequelize")
const sequelize = require("../database/conexion")


const Requisicion = sequelize.sequelize.define("Requisicion", {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_requisicion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.TIME,
        allowNull: false
    },
    fecha_envio: {
        type: DataTypes.TIME,
        allowNull: true
    },
    destino:{
        type: DataTypes.TEXT,
        allowNull: true
    }
})

module.exports = Requisicion;