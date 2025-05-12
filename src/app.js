import express from 'express';
import morgan from 'morgan';

import productoRoutes from "./routers/producto.routes.js";

const App = express();

// Middlewares
App.use(morgan('dev'));
App.use(express.json()); 
App.use("/producto", productoRoutes);



export default App;