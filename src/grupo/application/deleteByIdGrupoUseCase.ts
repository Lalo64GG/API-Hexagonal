import { GrupoRepository } from "../domain/GruposRepository";

export class deleteByIdGrupoUseCase {
    constructor(private readonly grupoRepository: GrupoRepository) {}

    async run(id: number): Promise<boolean | null> {
        try {
            const result = await this.grupoRepository.getById(id);
            if (!result) 
                return false; 
            const isDeleted = await this.grupoRepository.deleteById(id);
            return isDeleted;
        } catch (error) {
           return null
        }
    }
}
