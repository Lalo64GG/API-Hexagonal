import { Request, Response } from "express";

import { getAllGrupoUseCase } from "../../application/getAllGrupoUseCase";

export class getAllGrupoController {
  constructor(readonly getAllGrupoUseCase: getAllGrupoUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const grupo = await this.getAllGrupoUseCase.run();
      if (grupo)
        res.status(200).send({
          status: "success",
          data: grupo.map((grupo: any) => {
            return {
              id: grupo.id,
              name: grupo.name,
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Grupos no encontrados",
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
