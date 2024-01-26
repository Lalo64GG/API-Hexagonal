import { Grupo } from "../domain/Grupos";
import { GrupoRepository } from "../domain/GruposRepository";

export class getByIdGrupoUseCase{
    constructor( readonly GrupoRepository: GrupoRepository) {}

    async run(id: number): Promise<Grupo | null> {
        try {
            const result = await this.GrupoRepository.getById(id);
            return result;
        } catch (error) {
            return null;
        }
    }
}