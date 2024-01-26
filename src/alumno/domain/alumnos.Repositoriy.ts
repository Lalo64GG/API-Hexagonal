import { Alumno } from "./Alumno";

export interface AlumnoRepository {
    getAll(): Promise<Alumno[] | null>;
    getById(id: number): Promise<Alumno | null>;
    createAlumno(
        name: string,
        firstName: string,
        lastName: string,
        email: string
    ): Promise<Alumno | null>;
}