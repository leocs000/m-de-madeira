import { Municipio } from "./municipio.model";

export class Endereco {
    id!: number;
    logradouro!: string;
    numero!: string;
    bairro!: string;
    cep!: string;
    complemento!: string;
    cidade!: Municipio;
}
