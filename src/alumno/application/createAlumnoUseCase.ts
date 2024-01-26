import { Alumno } from "../domain/Alumno";
import { AlumnoRepository } from "../domain/alumnos.Repositoriy";

export class createAlumnoUseCase {
    constructor(readonly alumnoRepository: AlumnoRepository) { }
    
    async run(
        name: string,
        firstName: string,
        lastName: string,
        email: string
    ) : Promise<Alumno | null> {
        try {
            const alumno = await this.alumnoRepository.createAlumno(
                name,
                firstName,
                lastName,
                email
            );
            return alumno;
        } catch (error) {
            return null;
        }
    }
}