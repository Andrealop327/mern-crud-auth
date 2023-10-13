import express from 'express';
import morgan from 'morgan';


//enlazados con la route
import authRoute from './routes/auth.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use("/api", authRoute);


export default app; 