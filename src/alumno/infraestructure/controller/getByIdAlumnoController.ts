import { Request, Response } from "express";
import { getByIdAlumnoUseCase } from "../../application/getByIdAlumnoUseCase";


export class getByIdAlumnoController {
    constructor(readonly getByIdAlumnoUseCase: getByIdAlumnoUseCase) {}

    async run(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const alumno = await this.getByIdAlumnoUseCase.run(id);
            if (alumno) 
              res.status(200).send({
                status: "success",
                data: {
                    id: alumno.id,
                    name: alumno.name,
                    firstName: alumno.firstName,
                    lastName: alumno.lastName,
                    email: alumno.email,
                    password: alumno.password
                }
            })
            else 
              res.status(200).send({
                status: "error",
                msn: "Ocurrio algun problema",
            })
        }
        catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ocurrio algun problema",
                msn: error
            })
        }
}
}