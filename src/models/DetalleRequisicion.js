import { DataTypes } from "sequelize"
import { sequelize } from "../database/conexion.js"
import Requisicion from "./Requisicion.js"
import Producto from "./Producto.js"

const DetalleRequisicion = sequelize.define("DetalleRequisicion", {
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
    }, { 
        tableName: "detalle_requisicion",
        timestamps: false
}); 

export default DetalleRequisicion
Requisicion.hasOne(DetalleRequisicion, {foreignKey: 'requisicion_id'})
Producto.hasMany(DetalleRequisicion, {foreignKey: 'producto_id'})
DetalleRequisicion.belongsTo(Requisicion, {foreignKey: 'requisicion_id'})
DetalleRequisicion.belongsTo(Producto, {foreignKey: 'producto_id'}) 