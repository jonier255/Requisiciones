import { DataTypes } from "sequelize";
import { sequelize as sequelize } from "../database/conexion.js";
import Producto from "./Producto.js";


const Requisicion = sequelize.define("Requisicion", {
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
        type: DataTypes.ENUM('LABORATORIO', 'PROVEEDORES'),
        allowNull: true
    },
    Producto_codigoSerie: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
            model: 'producto',
            key: 'codigoSerie'
        }
    },
    urgencia: {
        type: DataTypes.ENUM('ALTA', 'MEDIA', 'BAJA'),
        allowNull: true
}},
{ 
    tableName: "requisicion",
    timestamps: false
});

export default Requisicion;
Producto.belongsTo(Requisicion, { foreignKey: 'RequisicionId' });
Requisicion.hasMany(Producto, { foreignKey: 'RequisicionId' });