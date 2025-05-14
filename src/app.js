import express from 'express';
import morgan from 'morgan';
import expressOasGenerator from 'express-oas-generator';
import fs from 'fs';
import path from 'path';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import productoRoutes from "./routers/producto.routes.js";
import alertasRoutes from "./routers/alertas.routes.js"
import requisicionRoutes from "./routers/requisicion.routes.js"
import detalleRequisicionRoutes from "./routers/detallerequisicion.routes.js"

// configuracion de la documentacion para la api
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const App = express();

expressOasGenerator.init(App, {});


// Middlewares
App.use(morgan('dev'));
App.use(express.json()); 
App.use(productoRoutes);
App.use(alertasRoutes); 
App.use(requisicionRoutes);
App.use(detalleRequisicionRoutes);

// Documentación Swagger
const openApiPath = path.join(__dirname, '../openapi.json');
if (fs.existsSync(openApiPath)) {
  const swaggerDocument = JSON.parse(fs.readFileSync(openApiPath, 'utf-8'));
  App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}


export default App;