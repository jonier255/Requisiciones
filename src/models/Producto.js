import { DataTypes, Model } from "sequelize";
import { sequelize as _sequelize } from "../database/conexion";

const Producto =  _sequelize.define("Producto",{
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

export default Producto;