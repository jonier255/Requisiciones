import express from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import expressOasGenerator from 'express-oas-generator';
import productoRoutes from "./routers/producto.routes.js";
import alertasRoutes from "./routers/alertas.routes.js";
import requisicionRoutes from "./routers/requisicion.routes.js";
import detalleRequisicionRoutes from "./routers/detallerequisicion.routes.js";

// Simulación de __dirname para ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const App = express();

// Middlewares
App.use(morgan('dev'));
App.use(express.json());

// Rutas
App.use("/producto", productoRoutes);
App.use("/alertas", alertasRoutes);
App.use("/requisicion", requisicionRoutes);
App.use("/detallerequisicion", detalleRequisicionRoutes);

// Inicializar expressOasGenerator DESPUÉS de definir rutas
expressOasGenerator.init(App, {
  swaggerDocumentOptions: {
    explorer: true
  }
});

// Documentación Swagger (esto será reemplazado por expressOasGenerator)
const openApiPath = path.join(__dirname, '../openapi.json');
if (fs.existsSync(openApiPath)) {
  const swaggerDocument = JSON.parse(fs.readFileSync(openApiPath, 'utf-8'));
  App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

export default App;