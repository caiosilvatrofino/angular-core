import { Component, OnInit } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carroslist',
  imports: [RouterLink],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss'
})
export class CarroslistComponent implements OnInit {

  lista: Carro[] = [];
  pagedLista: Carro[] = [];
  itemsPerPage = 10;
  currentPage = 1;
  totalPages = 1;

  constructor() { }

  ngOnInit(): void {
    // only for test before take the information on back-end
    this.lista.push(new Carro(1, 'Fiesta', 2009, 'Manual', 'Ford', '324-41241', 134000, 'GASOLINA', 33000, 'SIM'));
    this.lista.push(new Carro(2, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(3, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(4, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(5, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(6, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(7, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(8, 'Fiesta', 2009, 'Manual', 'Ford', '324-41241', 134000, 'GASOLINA', 33000, 'SIM'));
    this.lista.push(new Carro(9, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(10, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(11, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(12, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(13, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(14, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(15, 'Fiesta', 2009, 'Manual', 'Ford', '324-41241', 134000, 'GASOLINA', 33000, 'SIM'));
    this.lista.push(new Carro(16, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(17, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(18, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(19, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(20, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(21, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(22, 'Fiesta', 2009, 'Manual', 'Ford', '324-41241', 134000, 'GASOLINA', 33000, 'SIM'));
    this.lista.push(new Carro(23, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(24, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(25, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(26, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(27, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(28, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(29, 'Fiesta', 2009, 'Manual', 'Ford', '324-41241', 134000, 'GASOLINA', 33000, 'SIM'));
    this.lista.push(new Carro(30, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(31, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(32, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(33, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));
    this.lista.push(new Carro(34, 'Ford ka', 2008, 'Manual', 'Ford', '324-141', 245000, 'FLEX', 20000, 'NÃO'));
    this.lista.push(new Carro(35, 'Punto', 2014, 'Automatico', 'Fiat', '554-151', 130000, 'FLEX', 35000, 'SIM'));

    let carroNovo = history.state.carroNovo;
    let carroEdited = history.state.carroEdited;

    if (carroNovo) {
      let tamanho = this.lista.length;
      carroNovo.id = tamanho + 1;
      this.lista.push(carroNovo);
    }

    if (carroEdited) {
      let indice = this.lista.findIndex(x => { return x.id == carroEdited.id });
      this.lista[indice] = carroEdited;
    }

    this.updatePagination();
  }

  deleteById(carro: Carro) {
    if (confirm('Tem certeza que deseja deletar?')) {
      let indice = this.lista.findIndex(x => { return x.id == carro.id });
      this.lista.splice(indice, 1);
      this.updatePagination(); // Update pagination after deletion
    }
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.lista.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedLista = this.lista.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }
}