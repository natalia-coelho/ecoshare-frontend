import { Enderecos } from "./Enderecos";
import { Fornecedor } from "./Fornecedor";
import { Usuario } from "./Usuario";

export class Pessoa {
    pessoaId: number;
    cpfCnpj: string;
    nome: string;
    sobrenome: string;
    emailContato: string;
    fotoPerfil?: Uint8Array;
    bio?: string;
    tituloPerfil?: string;
    formacao?: string;
    descricao?: string;
    endereco?: Enderecos;
    enderecoId: number;
    fornecedor?: Fornecedor;
    fornecedorId: number;
    usuario?: Usuario;
    usuarioId: string;
}
