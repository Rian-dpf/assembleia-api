import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Voto } from './voto.entity';
import { AssociadoService } from './associado/associado.service';

@Injectable()
export class VotoService {
    constructor(
        @Inject('VOTO_REPOSITORY')
        private readonly votoRepository: Repository<Voto>,
        private readonly associadoService: AssociadoService
    ){}
}
