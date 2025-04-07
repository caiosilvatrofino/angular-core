import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';
import { CarroService } from '../../../services/carro.service';

@Component({
  selector: 'app-carroslist',
  standalone: true,
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
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.loadLista();
  }

  loadLista(): void {
    this.carroService.findAll().subscribe({
      next: lista => {
        this.lista = lista;
        this.currentPage = 1;
        this.updatePagination();
      },
      error: () => {
        alert('Erro ao carregar a lista de carros.');
      }
    });
  }

  deleteById(carro: Carro) {
    if (confirm('Tem certeza que deseja deletar?')) {
      this.carroService.delete(carro.id).subscribe({
        next: () => {
          this.loadLista(); // recarrega do backend após deletar
        },
        error: () => alert('Erro ao deletar o carro.')
      });
    }
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.lista.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedLista = this.lista.slice(start, end);
    this.cdr.detectChanges();
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
