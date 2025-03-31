import { Component } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carroslist',
  imports: [RouterLink],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss'
})
export class CarroslistComponent {

  lista: Carro[] = [];

  constructor(){
    this.lista.push(new Carro(1, 'Fiesta', 2009, 'Manual','Ford','324-41241',134.000 , 'GASOLINA', 33.000, 'SIM'));
    this.lista.push(new Carro(2, 'Ford ka', 2008, 'Manual', 'Ford','324-141', 245.000, 'FLEX', 20.000, 'NÃO'))
    this.lista.push(new Carro(3, 'Punto', 2014, 'Automatico','Fiat','554-151', 130.000, 'FLEX', 35.000, 'SIM'))

  }

  deleteById(carro: Carro){
   if(confirm('Tem certeza que deseja deletar?')) { 
   let indice = this.lista.findIndex(x => {return x.id == carro.id});
   this.lista.splice(indice, 1);
  }
}


}
