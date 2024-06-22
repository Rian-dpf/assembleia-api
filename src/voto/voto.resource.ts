import { OpcaoVoto } from "./voto.entity";
import { IsNotEmpty, IsIn } from 'class-validator';

export class RegistroVotoResource {

    @IsNotEmpty({ message: 'CPF é um campo obrigatório.' })
    cpf: string;

    @IsNotEmpty({ message: 'Opção de Voto é um campo obrigatório.' })
    @IsIn([OpcaoVoto.NAO, OpcaoVoto.SIM], { message: "Opção de voto inválida, só coloque SIM ou NÃO." })
    opcaoVoto: OpcaoVoto;
}