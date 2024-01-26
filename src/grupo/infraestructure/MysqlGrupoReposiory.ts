import { query } from "../../database/mysql";
import { Grupo } from "../domain/Grupos";
import { GrupoRepository } from "../domain/GruposRepository";

export class MysqlGrupoRepository implements GrupoRepository{
    async getAll(): Promise<Grupo[] | null> {
        const sql = "SELECT * FROM grupo"
        try {
            const [data]: any = await query(sql,[]);
            const dataGrupos = Object.values(JSON.parse(JSON.stringify(data)));
            return dataGrupos.map(
                (grupo: any) =>(
                    new Grupo(
                        grupo.id,
                        grupo.name
                    )
                )
            );
        } catch (error) {
            return null;
        }
    }

    async getById(id: number): Promise<Grupo | null> {
        const sql = "SELECT * FROM grupo WHERE id = ?";
        const params: any[] = [id];
        try {
            const [result]: any = await query(sql, params);
            return new Grupo(
                result[0].id,
                result[0].name
            );
        } catch (error) {
            return null
        }
    }

    async createGrupo(
        name: string
        ): Promise<Grupo | null> {
            const sql = "INSERT INTO grupo (name) VALUE (?)"
            const params: any[] = [name]
        try {
            const [result]: any = await query(sql,params);
            return new Grupo(result.interId, name);
        } catch (error) {
            return null;
        }
    }
}