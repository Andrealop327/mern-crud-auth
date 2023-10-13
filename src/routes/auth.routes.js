import { Router } from "express";
// Router es una clase directa de express
// por medio de router puedo crear las rutas para los metodos A USAR 
//traigo desde el controlador las funciones para ejecutarlas en ruta
import {login, register } from "../crontrollers/auth.controller.js";

const router = Router();

router.post('/register', register);// al ingresaar ala ruta, se ejecuta la funsion
router.post('/login', login);

export default router;