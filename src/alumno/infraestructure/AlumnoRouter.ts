import  express  from "express";

import { CreateAlumnoController, GetAllAlumnoController, GetByIdAlumnoController } from "./dependecies";

export const alumnoRouter = express.Router();

alumnoRouter.get(
    "/",
    GetAllAlumnoController.run.bind(GetAllAlumnoController)
);

alumnoRouter.get(
    "/:id",
    GetByIdAlumnoController.run.bind(GetByIdAlumnoController)
);
alumnoRouter.post(
    "/",
    CreateAlumnoController.run.bind(CreateAlumnoController)
);