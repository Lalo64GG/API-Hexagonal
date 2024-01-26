import { Grupo } from "../domain/Grupos";
import { GrupoRepository } from "../domain/GruposRepository";

export class getAllGrupoUseCase {
    constructor(readonly GrupoRepository: GrupoRepository) {}
    async run(): Promise<Grupo[] | null> {
        try {
            const result = await this.GrupoRepository.getAll();
            return result;
        } catch (error) {
            return null;
        }
    }
} 