import { Pauta } from "./pauta.entity";

export class CriarPautaResource{
    descricao: string;
}

// Modelo representacional para quando quiser retornar um objeto do tipo pauta
export class PautaResource {
    id: string;
    descricao: string;
    status: string;
}

export function toRepresentation(entity: Pauta): PautaResource {
    const resource = new PautaResource();
    resource.id = entity.id;
    resource.descricao = entity.descricao;
    resource.status = entity.obterStatus();
    return resource;
}

// Transformando o CriarPautaResource em um Domínio
export function toDomain(resource: CriarPautaResource): Pauta {
    const pauta = new Pauta();
    pauta.descricao = resource.descricao;
    return pauta;
}