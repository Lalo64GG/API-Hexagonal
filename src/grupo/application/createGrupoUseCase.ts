import { Grupo } from "../domain/Grupos";
import { GrupoRepository } from "../domain/GruposRepository";

export class createGrupoUseCase{
    constructor(readonly GrupoRepository: GrupoRepository) {}

    async run(
        name: string
    ) : Promise<Grupo | null>{
        try {
            const grupo = await this.GrupoRepository.createGrupo(
                name
            );
            return grupo
        } catch (error) {
           return null 
        }
    }
}