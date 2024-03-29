import { createGrupoUseCase } from "../application/createGrupoUseCase";
import { getAllGrupoUseCase } from "../application/getAllGrupoUseCase";
import { getByIdGrupoUseCase } from "../application/getByIdGrupoUseCase";
import { deleteByIdGrupoUseCase } from "../application/deleteByIdGrupoUseCase"
import { MysqlGrupoRepository } from "./MysqlGrupoReposiory";

import { createGrupoController } from "./controller/createGrupoController";
import { getAllGrupoController } from "./controller/getAllGrupoController";
import { getByIdGrupoController } from "./controller/getByIdGrupoController";
import { deleteByIdGrupoController } from "./controller/deleteByIdGrupoController"

export const mysqlGrupoRepository = new MysqlGrupoRepository();
export const CreateGrupoUseCase = new createGrupoUseCase(
    mysqlGrupoRepository
);
export const GetAllGrupoUseCase = new getAllGrupoUseCase(
    mysqlGrupoRepository
);
export const GetByIdGrupoUseCase = new getByIdGrupoUseCase(
    mysqlGrupoRepository
);
export const DeleteByIdGrupoUseCase = new deleteByIdGrupoUseCase(
    mysqlGrupoRepository
);
export const CreateGrupoController = new createGrupoController(
    CreateGrupoUseCase
);
export const GetAllGrupoController = new getAllGrupoController(
    GetAllGrupoUseCase
);
export const GetByIdGrupoController = new getByIdGrupoController(
    GetByIdGrupoUseCase
)

export const DeleteByIdGrupoController = new deleteByIdGrupoController(
    DeleteByIdGrupoUseCase    
);