import App from "./app.js";
import { PORT } from "./config/puerto.js";
import { connectDB, sequelize } from "./database/conexion.js";
import './models/index.js'; 


async function main() {
    try {
        await connectDB();

        //sincroniza los modelos con la base de datos
        await sequelize.sync({ alter: true });
        console.log('📦 Modelos sincronizados con la base de datos');

        App.listen(PORT, () => {
            console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Error al conectarse a la base de datos", error);
    }
}

main();