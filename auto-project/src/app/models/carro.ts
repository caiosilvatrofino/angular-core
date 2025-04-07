import { Marca } from "./marca";
import { Proprietario } from "./proprietario";

export class Carro {

  id!: number;
  nome!: string;
  ano!: number;
  cambio!: string;
  placa!: string;
  km!: string;
  combustivel!: string;
  financiamento!: string;
  marca!: Marca;
  proprietarios: Proprietario[] = [];

  constructor(
    nome: string,
    ano: number,
    cambio: string,
    placa: string,
    km: string,
    combustivel: string ,
    financiamento: string ,
    marca: Marca = { nome: '', cnpj: '' },
    proprietarios: Proprietario[] = [{ nome: '', idade: '' }]
  ) {
    this.nome = nome;
    this.ano = ano;
    this.cambio = cambio;
    this.placa = placa;
    this.km = km;
    this.combustivel = combustivel;
    this.financiamento = financiamento;
    this.marca = marca;
    this.proprietarios = proprietarios;
  }
}
