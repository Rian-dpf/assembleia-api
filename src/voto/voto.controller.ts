import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { PautasService } from 'src/pautas/pautas.service';
import { VotoService } from './voto.service';
import { Response } from 'express';
import { RegistroVotoResource } from './voto.resource';

@Controller('pautas/:id/votos')
export class VotoController {

    constructor(
        private readonly pautasService: PautasService,
        private readonly votoService: VotoService
    ){}

    @Post()
    async registrarVoto(
        @Param('id') idPauta: string,
        @Body() resource: RegistroVotoResource,
        @Res() response: Response
    ) {
        return response.status(HttpStatus.ACCEPTED).send();
    }
}
