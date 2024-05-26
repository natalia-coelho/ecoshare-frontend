import { Categoria } from "./Categoria";
import { Fornecedor } from "./Fornecedor";

export class Produto {
    produtoId: number;
    nome: string;
    preco: number;
    descricao?: string;
    imagemProduto?: string;
    categoria?: Categoria; // Se Categoria também for uma classe/modelo
    fornecedor?: Fornecedor; // Se Fornecedor também for uma classe/modelo
    fornecedorId: number;
}
