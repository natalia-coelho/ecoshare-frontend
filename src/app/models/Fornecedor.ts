import { Usuario } from "./Usuario";

export class Fornecedor {
    fornecerdorId: number;
    razaoSocial: string;
    nomeFantasia: string;
    cpfCnpj: string;
    tipoPessoa: TipoPessoa;
    descricao?: string;
    imagemUrl?: string;
    usuario?: Usuario;
    usuarioId?: number;
}

export enum TipoPessoa {
    PessoaFisica = 'PessoaFisica',
    PessoaJuridica = 'PessoaJuridica'
}