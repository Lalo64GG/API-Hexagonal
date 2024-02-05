import { AlumnoRepository } from "../domain/alumnos.Repositoriy"

export class deleteByIdAlumnoUseCase {
    constructor(private readonly alumnoRepository : AlumnoRepository ) {}

    async run(id: number): Promise <boolean | null> {
        try{
            const result = await this.alumnoRepository.getById(id);
            if (!result)
                return false;
            const isDeleted = await this.alumnoRepository.deleteById(id);
            return isDeleted;
        } catch(error){
            return null
        }
    }
}