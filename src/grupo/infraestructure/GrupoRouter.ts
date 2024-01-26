import express from "express"

import { CreateGrupoController } from "./dependecies";
import { GetAllGrupoController } from "./dependecies";
import { GetByIdGrupoController } from "./dependecies";

export const grupoRouter = express.Router();

grupoRouter.get(
    "/",
    GetAllGrupoController.run.bind(GetAllGrupoController)
);

grupoRouter.get(
    "/:id",
    GetByIdGrupoController.run.bind(GetByIdGrupoController)
);

grupoRouter.post(
    "/",
    CreateGrupoController.run.bind(CreateGrupoController)
)