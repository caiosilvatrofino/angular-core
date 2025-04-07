import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from '../../../models/carro';
import { FormsModule } from '@angular/forms';
import { CarroService } from '../../../services/carro.service';

@Component({
  selector: 'app-carrosdetail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carrosdetail.component.html',
  styleUrl: './carrosdetail.component.scss'
})
export class CarrosdetailComponent {

  carro: Carro = {
    id: 0,
    nome: '',
    ano: new Date().getFullYear(),
    placa: '',
    cambio: '',
    combustivel: '',
    financiamento: '',
    km:'',
    marca: {
      nome: '',
      cnpj: ''
    },
    proprietarios: [{
      nome: '',
      idade: ''
    }]
  };

  private carroService = inject(CarroService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    const id = +this.route.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.carroService.findById(id).subscribe({
      next: (retorno) => {
        this.carro = retorno;

        if (!this.carro.proprietarios || this.carro.proprietarios.length === 0) {
          this.carro.proprietarios = [{ nome: '', idade: '' }];
        }

        if (!this.carro.marca) {
          this.carro.marca = { nome: '', cnpj: '' };
        }
      },
      error: () => alert('Erro ao buscar o carro.')
    });
  }

  save() {
    if (this.carro.id > 0) {
      console.log('Dados enviados no POST:', JSON.stringify(this.carro, null, 2));
      this.carroService.update(this.carro, this.carro.id).subscribe({
        next: () => {
          alert('Informações atualizadas.');
          this.router.navigate(['/admin/carros'], { state: { carroEdited: this.carro } });
        },
        error: () => alert('Erro ao atualizar.')
      });
    } else {
      console.log('Dados enviados no POST:', JSON.stringify(this.carro, null, 2));
      this.carroService.save(this.carro).subscribe({
        next: (mensagem: string) => {
          console.log('Mensagem do back-end', mensagem);
          this.router.navigate(['/admin/carros'], { state: { carroNovo: mensagem } });
        },
        error: () => alert('Erro ao salvar novo carro.')
      });
    }
  }

  close() {
    if (confirm('Tem certeza que deseja sair?')) {
      this.router.navigate(['/admin/carros']);
    }
  }
}
