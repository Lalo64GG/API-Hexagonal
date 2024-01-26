import { Alumno } from "../domain/Alumno"; 
import { AlumnoRepository } from "../domain/alumnos.Repositoriy";

export class getAllAlumnoUseCase {
    constructor(readonly alumnoRepository: AlumnoRepository) {}

    async run(): Promise<Alumno [] | null> {
        try {
            const result = await this.alumnoRepository.getAll();
            return result;
        } catch (error) {
            return null;
        }
    }
}