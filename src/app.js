import express from 'express';
import morgan from 'morgan';


const App = express();

// Middlewares
App.use(morgan('dev'));
App.use(express.json()); 



export default App;