import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importe o Router aqui
import { LoginService } from '../../../auth/login.service';
import { Login } from '../../../auth/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule],
  styleUrl: './login.component.scss' // Aponta para o arquivo que você criou
})
export class LoginComponent {

  login: Login = new Login();

  router = inject(Router);

  loginService = inject(LoginService);

  constructor(){
    

  }

  logar(){
    this.loginService.logar(this.login).subscribe({
      next: token => {
        console.log(token);
        if(token) {
          this.loginService.addToken(token);
          this.router.navigate(['/admin/carros']);
        } else {
          alert('Usuario incorreto!');
        }
      },
      error: erro => {
        alert('Credenciais invalidas para o login.')
      }
    });
  }


}