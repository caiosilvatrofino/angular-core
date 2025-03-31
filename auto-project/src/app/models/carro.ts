export class Carro {

    id!: number;
    nome!: string;
    ano!: number;
    cambio!: string;
    marca!: string;
    placa!: string;
    km!: number;
    combustivel!: string;
    valor!: number;
    financiamento!: string;

    constructor(id: number, nome: string, ano: number, cambio: string, marca: string, placa: string, km: number, combustivel: string,
        valor: number, financiamento: string
    ){
        this.id = id;
        this.nome = nome;
        this.ano = ano;
        this.cambio = cambio;
        this.marca = marca;
        this.placa = placa;
        this.km = km;
        this.combustivel = combustivel;
        this.valor = valor;
        this.financiamento = financiamento;

    }
}
