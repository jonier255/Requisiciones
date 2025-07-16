import { DataTypes } from "sequelize";
import  { sequelize }  from "../database/conexion.js";

export const Producto =  sequelize.define("Producto",{
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
    },
    codigoSerie: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

    }, {
    tableName: "producto",
    timestamps: false 
});

export default Producto;