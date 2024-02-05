import express from "express"

import { CreateGrupoController,  GetAllGrupoController ,GetByIdGrupoController, DeleteByIdGrupoController } from "./dependecies";

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
);

grupoRouter.delete(
    "/:id",
    DeleteByIdGrupoController.run.bind(DeleteByIdGrupoController)
)