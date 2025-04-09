import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';
import { CarroService } from '../../../services/carro.service';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrolist.component.html',
  styleUrl: './carrolist.component.scss'
})
export class CarroslistComponent implements OnInit {

  lista: Carro[] = [];
  pagedLista: Carro[] = [];
  itemsPerPage = 10;
  currentPage = 1;
  totalPages = 1;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' | '' = '';
  filtros: any = {};

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
        this.filterAndPaginate();
      },
      error: () => {
        alert('Erro ao carregar a lista de carros.');
      }
    });
  }

  applyFilter(column: string, event: Event) {
    let filterValue: string = '';
    if (event.target instanceof HTMLInputElement) {
      filterValue = event.target.value;
    } else if (event.target instanceof HTMLSelectElement) {
      filterValue = event.target.value;
    }
    this.filtros[column] = filterValue;
    this.currentPage = 1;
    this.filterAndPaginate();
  }

  sortBy(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.filterAndPaginate();
  }

  filterAndPaginate() {
    let listaFiltrada = [...this.lista];

    // Aplicar filtros
    for (const key in this.filtros) {
      if (this.filtros[key] !== '' && this.filtros[key] !== null) {
        listaFiltrada = listaFiltrada.filter(carro => {
          const value = this.getObjectProperty(carro, key);
          if (value !== null && value !== undefined) {
            return String(value).toLowerCase().includes(String(this.filtros[key]).toLowerCase());
          }
          return false;
        });
      }
    }

    // Ordenar
    if (this.sortColumn) {
      listaFiltrada.sort((a, b) => {
        const valueA = this.getObjectProperty(a, this.sortColumn);
        const valueB = this.getObjectProperty(b, this.sortColumn);

        if (valueA < valueB) {
          return this.sortDirection === 'asc' ? -1 : 1;
        }
        if (valueA > valueB) {
          return this.sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    // Paginar
    this.totalPages = Math.ceil(listaFiltrada.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedLista = listaFiltrada.slice(start, end);
    this.cdr.detectChanges();
  }

  getObjectProperty(obj: any, path: string): any {
    return path.split('.').reduce((o, p) => o && o[p], obj);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.filterAndPaginate();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.filterAndPaginate();
    }
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

  managerAcessories() {
    // implementar gerenciamento de acessorios e inclusão de fotos

  }
}