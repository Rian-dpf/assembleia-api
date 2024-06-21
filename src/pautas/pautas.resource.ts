import { Pauta } from "./pauta.entity";

export class CriarPautaResource{
    descricao: string;
}

// Transformando o CriarPautaResource em um Domínio
export function toDomain(resource: CriarPautaResource): Pauta {
    return {
        descricao: resource.descricao
    };
}