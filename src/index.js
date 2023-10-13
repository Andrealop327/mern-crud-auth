import app from './app.js'
import { connectDB } from '../database.js';

connectDB();
app.listen(4000)
console.log('server on port', 4000); 