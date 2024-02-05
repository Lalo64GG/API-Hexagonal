import { Request, Response } from "express";
import { deleteByIdGrupoUseCase } from "../../application/deleteByIdGrupoUseCase"; // Asegúrate de tener el caso de uso correspondiente importado

export class deleteByIdGrupoController {
  constructor(readonly deleteGrupoUseCase: deleteByIdGrupoUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const isDeleted = await this.deleteGrupoUseCase.run(id);

      if (isDeleted)
        res.status(200).send({
          status: "success",
          data: {
            msn: "Grupo eliminado exitosamente",
          },
        });
      else
        res.status(200).send({
          status: "error",
          msn: "El grupo no fue encontrado o no pudo ser eliminado",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrió un problema al procesar la solicitud",
        msn: error,
      });
    }
  }
}
