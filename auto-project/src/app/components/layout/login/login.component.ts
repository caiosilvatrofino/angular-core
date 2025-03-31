import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importe o Router aqui


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule],
  styleUrl: './login.component.scss' // Aponta para o arquivo que você criou
})
export class LoginComponent {

  usuario!: string;
  senha!: string;

  constructor(private router: Router) {}

  logar() {
    if(this.usuario == 'admin' && this.senha == 'admin'){
      this.router.navigate(['admin/carros'])
    } else {
      alert('Usuario ou senha incorreta')
    }
  }

}