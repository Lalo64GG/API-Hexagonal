import  express  from "express";

import { CreateAlumnoController } from "./dependecies";
import { GetAllAlumnoController } from "./dependecies";
import { GetByIdAlumnoController } from "./dependecies";

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