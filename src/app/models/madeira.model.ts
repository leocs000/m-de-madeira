import { Acabamento } from "./acabamento.model";
import { Fornecedor } from "./fornecedor.model";
import { Material } from "./material.model";
import { TipoCorte } from "./tipo-corte.model";

export class Madeira {
    id!: number;
    nome!: string;
    descricao!: string;
    largura!: number;
    comprimento!: number;
    espessura!: number;
    cor!: string;
    quantidade!: number; 
    preco!: number;
    material!: Material;
    tipoCorte!: TipoCorte;
    fornecedor!: Fornecedor;
    acabamento!: Acabamento;
}
