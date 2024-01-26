import { Request, Response } from "express";

import { getAllAlumnoUseCase } from "../../application/getAllAlumnoUseCase";

export class getAllAlumnoController {
  constructor(readonly getAllAlumnoUseCase: getAllAlumnoUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const alumnos = await this.getAllAlumnoUseCase.run();
      if (alumnos)
        res.status(200).send({
          status: "success",
          data: alumnos.map((alumnos: any) => {
            return {
              id: alumnos.id,
              name: alumnos.name,
              firstName: alumnos.firstName,
              lastName: alumnos.lastName,
              email: alumnos.email,
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Alumnos no encontrados",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
