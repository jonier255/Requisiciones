const { DataTypes, Model } = require("sequelize")
const sequelize = require("../database/conexion")

const Producto =  sequelize.sequelize.define("Producto",{
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Producto;