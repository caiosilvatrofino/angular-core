import { Component, OnInit } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { CarroService } from '../../../services/carro.service';

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

  private carroService = inject(CarroService); 

  constructor() { }

  ngOnInit(): void {
    this.carroService.findAll().subscribe({
      next: lista => {
        this.lista = lista;
        console.log(this.lista);
        this.updatePagination(); // Atualiza a paginação com os dados do backend
        this.handleNavigationState(); // Chama para tratar os dados da navegação
      },
      error: erro => {
        alert('Ocorreu erro para montar a lista de carros!');
      }
    });
  }

  handleNavigationState(): void {
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
  }

  deleteById(carro : Carro){
    if(confirm('Tem certeza que deseja deletar?')){
      this.carroService.delete(carro.id).subscribe({
        next: () => {
          this.lista = this.lista.filter( c => c.id !== carro.id);
          this.updatePagination();
        },
        error: erro => {
          alert('Ocorreu erro para deletar.')
        }
      })
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