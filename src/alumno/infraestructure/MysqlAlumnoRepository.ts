import { query } from "../../database/mysql"; 
import { Alumno } from "../domain/Alumno";
import { AlumnoRepository } from "../domain/alumnos.Repositoriy";

export class MysqlAlumnoRespository implements AlumnoRepository {

    async getAll(): Promise<Alumno[] | null> {
        const sql = "SELECT * FROM alumno";
        try {
            const [data]: any = await query(sql, []);
            const dataAlumnos = Object.values(JSON.parse(JSON.stringify(data)));

            return dataAlumnos.map(
                (alumno : any) =>
                new Alumno(
                    alumno.id,
                    alumno.name,
                    alumno.firstName,
                    alumno.lastName,
                    alumno.email
                )
            );
        } catch (error) {
            return null;
        }
    }

    async getById(id: number): Promise<Alumno | null> {
        const sql = "SELECT * FROM alumno WHERE id =?";
        const params: any[] = [id];
        try {
            const [result]: any = await query(sql, params);

            return new Alumno(
                result[0].id,
                result[0].name,
                result[0].firstName,
                result[0].lastName,
                result[0].email
            );
        } catch(error) {
            return null;
        }
    }

    async createAlumno(
        name: string,
        firstName: string,
        lastName: string,
        email: string
    ): Promise<Alumno | null> {
        const sql = "INSERT INTO alumno (name, firstName, lastName, email) VALUES (?, ?, ?, ?)";
        const params: any[] = [name, firstName, lastName, email];
        
        try {
        const [result]: any = await query(sql, params);

        return new Alumno(result.insertId, name, firstName, lastName, email);
        } catch (error) {
            return null;
        }
}
}