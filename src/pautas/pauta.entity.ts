import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity()
export class Pauta {

    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    descricao: string;

    @CreateDateColumn({ name: 'data_cadastro'})
    dataCadastro?: Date;

    @Column({ type: 'timestamp', nullable: true })
    abertura?: Date;

    @Column({ type: 'timestamp', nullable: true })
    fechamento?: Date;

    obterStatus(): string{
        if(this.fechamento && this.fechamento < new Date()) {
            return statusPauta.ENCERRADA;
        }

        if (this.abertura) {
            return statusPauta.INICIADA;
        }

        return statusPauta.NAO_INICIADA;
    }
}

enum statusPauta {
    NAO_INICIADA = 'Sessão não iniciada',
    INICIADA = 'Sessão iniciada',
    ENCERRADA = 'Pauta encerrada',
}