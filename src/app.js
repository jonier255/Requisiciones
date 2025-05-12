import express from 'express';
import morgan from 'morgan';

import productoRoutes from "./routers/producto.routes.js";
import alertasRoutes from "./routers/alertas.routes.js"
import requisicionRoutes from "./routers/requisicion.routes.js"
import detalleRequisicionRoutes from "./routers/detallerequisicion.routes.js"
const App = express();

// Middlewares
App.use(morgan('dev'));
App.use(express.json()); 
App.use("/producto", productoRoutes);
App.use("/alertas", alertasRoutes); 
App.use("/requisicion", requisicionRoutes);
App.use("/detallerequisicion", detalleRequisicionRoutes);


export default App;