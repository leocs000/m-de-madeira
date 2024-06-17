import { Endereco } from "./endereco.model";
import { Telefone } from "./telefone.model";

export class Usuario {
    id!: number;
    nome!: string;
    cpf!: string;
    email!: string;
    senha!: string;
    statusLogin!: boolean;
    telefone!: Telefone;
    endereco!: Endereco;
}