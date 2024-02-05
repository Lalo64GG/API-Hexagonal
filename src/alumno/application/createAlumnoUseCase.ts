import bcrypt from 'bcrypt'
import { Alumno } from "../domain/Alumno";
import { AlumnoRepository } from "../domain/alumnos.Repositoriy";

export class createAlumnoUseCase {
    constructor(readonly alumnoRepository: AlumnoRepository) { }
    
    async run(
        name: string,
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ): Promise<Alumno | null> {
        try {
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);

            const hashedPassword = await bcrypt.hash(password, salt);
            const alumno = await this.alumnoRepository.createAlumno(
                name,
                firstName,
                lastName,
                email,
                password = hashedPassword
            );

            return alumno;
        } catch (error) {
            console.error("Error al crear el alumno:", error);
            return null;
        }
    }
}
