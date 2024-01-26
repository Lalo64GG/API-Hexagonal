import { Alumno } from "../domain/Alumno";  
import { AlumnoRepository } from "../domain/alumnos.Repositoriy";

export class getByIdAlumnoUseCase {
    constructor(readonly alumnoRepository: AlumnoRepository) {}

    async run(id: number): Promise<Alumno | null> {
        try {
            const result = await this.alumnoRepository.getById(id);
            return result;
        } catch (error) {
            return null;
        }
    }
}