import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Carro } from '../../../models/carro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrosdetail',
  imports: [[FormsModule, RouterLink]],
  templateUrl: './carrosdetail.component.html',
  styleUrl: './carrosdetail.component.scss'
})
export class CarrosdetailComponent {

  carro: Carro = new Carro(0,"",0,"","","",0,"",0,"");

  router = inject(ActivatedRoute)
  router2 = inject(Router);

  constructor(){
    let id = this.router.snapshot.params['id'];
    if(id > 0) {
      this.findById(id);
    }
  }

  findById(id: number){
    let carroReturned: Carro = new Carro(id, 'Punto', 2014, 'Automatico','Fiat','554-151', 130.000, 'FLEX', 35.000, 'SIM');
    this.carro = carroReturned;
  }

  save(){
    if(this.carro.id > 0 ) {
      alert('Editado com sucesso com sucesso!');
      this.router2.navigate(['admin/carros'], {state: {carroEdited: this.carro}});
    }else {
      alert('Salvo com sucesso!');
      this.router2.navigate(['admin/carros'], {state: {carroNovo: this.carro}});
    }
    
  }

}
