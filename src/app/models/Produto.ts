import { Fornecedor } from "./Fornecedor";

export class Produto {
    produtoId?: number;
    nome: string;
    preco: number;
    descricao?: string;
    imagem?: string;
    categoria?: Categoria;
    fornecedor?: Fornecedor;
    fornecedorId?: number;
}

export enum Categoria {
    Cosmeticos = 'Cosmeticos',
    Alimenticios = 'Alimenticios',
    Vestuario = 'Vestuario',
    Outros = 'Outros'
}
