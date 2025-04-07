export class Proprietario {

    id?: number;
    nome!: string;
    idade!: string;
  
    constructor(nome: string, idade: string ) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  