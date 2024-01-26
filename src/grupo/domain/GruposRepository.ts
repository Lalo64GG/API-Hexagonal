import { Grupo } from './Grupos'
export interface GrupoRepository{
    getAll(): Promise<Grupo[] | null>;
    getById(id: number): Promise<Grupo | null>;
    createGrupo(
        name: string
    ) : Promise<Grupo | null>;
}