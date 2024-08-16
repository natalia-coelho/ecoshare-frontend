import { Usuario } from "./Usuario";

export class Fornecedor {
    fornecedorId: number;
    razaoSocial: string;
    nomeFantasia: string;
    cpfCnpj: string;
    tipoPessoa: TipoPessoa;
    descricao?: string;
    imagemUrl?: string;
    usuario?: Usuario;
    usuarioId?: number;
    whatsappUrl?: 'https://api.whatsapp.com/';
    instagramUrl?: 'https://www.instagram.com/';
}

export enum TipoPessoa {
    PessoaFisica = 'PessoaFisica',
    PessoaJuridica = 'PessoaJuridica'
}