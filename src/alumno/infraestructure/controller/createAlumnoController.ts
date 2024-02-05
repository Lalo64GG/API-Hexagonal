import { Request, Response } from "express";

import { createAlumnoUseCase } from "../../application/createAlumnoUseCase";

export class createAlumnoController {
  constructor(readonly createAlumnoUseCase: createAlumnoUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const alumno = await this.createAlumnoUseCase.run(
        data.name,
        data.firstName,
        data.lastName,
        data.email,
        data.password
      );

      if (alumno)
        res.status(201).send({
          status: "success",
          data: {
            id: alumno?.id,
            name: alumno?.name,
            firstName: alumno?.firstName,
            lastName: alumno?.lastName,
            email: alumno?.email,
            password: alumno?.password
          },
        });
      else
        res.status(204).send({
          status: "error",
          msn: "Alumno no creado",
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
