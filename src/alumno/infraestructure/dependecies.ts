import { createAlumnoUseCase } from "../application/createAlumnoUseCase";
import { getAllAlumnoUseCase } from "../application/getAllAlumnoUseCase";
import { getByIdAlumnoUseCase } from "../application/getByIdAlumnoUseCase";
import { MysqlAlumnoRespository } from "./MysqlAlumnoRepository";

import { createAlumnoController } from "./controller/createAlumnoController";
import { getAllAlumnoController } from "./controller/getAllAlumnoController";
import { getByIdAlumnoController } from "./controller/getByIdAlumnoController";

export const mysqlAlumnoRepository = new MysqlAlumnoRespository();
export const CreateAlumnoUseCase = new createAlumnoUseCase(
    mysqlAlumnoRepository
);
export const GetAllAlumnoUseCase = new getAllAlumnoUseCase(
    mysqlAlumnoRepository
);
export const GetByIdAlumnoUseCase = new getByIdAlumnoUseCase(
    mysqlAlumnoRepository
);
export const CreateAlumnoController = new createAlumnoController(
    CreateAlumnoUseCase
);
export const GetAllAlumnoController = new getAllAlumnoController(
    GetAllAlumnoUseCase
);
export const GetByIdAlumnoController = new getByIdAlumnoController(
    GetByIdAlumnoUseCase
);