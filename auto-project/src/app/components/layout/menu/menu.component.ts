import { Component, inject, Inject } from '@angular/core';
import { LoginService } from '../../../auth/login.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  loginService =  inject(LoginService);

  
  

}
