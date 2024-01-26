import { Request, Response } from "express";

import { createGrupoUseCase } from "../../application/createGrupoUseCase";

export class createGrupoController {
  constructor(readonly createGrupoUseCase: createGrupoUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const grupo = await this.createGrupoUseCase.run(
        data.name
      );

      if (grupo)
        res.status(201).send({
          status: "succes",
          data: {
            id: grupo?.id,
            name: grupo?.name,
          },
        });
      else
        res.status(204).send({
          status: "error",
          msn: "Grupo no creado",
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
