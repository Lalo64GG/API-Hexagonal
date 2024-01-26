import { Request, Response } from "express";
import { getByIdGrupoUseCase } from "../../application/getByIdGrupoUseCase";

export class getByIdGrupoController {
  constructor(readonly getByIdGrupoUseCase: getByIdGrupoUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const grupo = await this.getByIdGrupoUseCase.run(id);
      if (grupo)
        res.status(200).send({
          status: "success",
          data: {
            id: grupo.id,
            name: grupo.name,
          },
        });
      else
        res.status(200).send({
          status: "error",
          msn: "Ocurrio algun problema",
        });
    } catch (error) {
      res.status(204).send({
        statis: "error",
        data: "Ocurrio algun problema",
        msn: error,
      });
    }
  }
}
