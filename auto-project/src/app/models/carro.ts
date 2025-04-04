import { Marca } from "./marca";
import { Proprietario } from "./proprietario";

export class Carro {

    id!: number;
    nome!: string;
    ano!: number;
    cambio!: string;
    placa!: string;
    km!: number;
    combustivel!: string;
    financiamento!: string;
    marca!: Marca;
    proprietarios: Proprietario[] = [];

    
}
