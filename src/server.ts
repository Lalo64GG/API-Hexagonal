import express from 'express';
import { Signale } from 'signale';

import { alumnoRouter } from './alumno/infraestructure/AlumnoRouter';
import { grupoRouter } from './grupo/infraestructure/GrupoRouter';

const app = express();
app.disable("x-powered-by");

const signale = new Signale();

app.use(express.json());
app.use("/alumnos", alumnoRouter);
app.use("/grupos", grupoRouter)

app.listen(3000, () =>{
    signale.success(`Server online in port 3000`);
})