import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "./usuario";
import { Login } from "./login";


@Injectable({
    providedIn: 'root'
})

export class LoginService {


    http = inject(HttpClient);

    API = "http://localhost:8080/api/login";

    constructor() {}

    logar(login: Login): Observable<string> {
        return this.http.post<string>(this.API, login, {responseType: 'text' as 'json'});
    }


    addToken(token: string) {
        localStorage.setItem('token', token);
    }


    removerToken(){
        localStorage.removeItem('token');
    }


    getToken(){
        return localStorage.getItem('token');
    }


    jwtDecode() {
        const token = this.getToken();
        if (token) {
          const payloadBase64 = token.split('.')[1];
          const payloadDecoded = atob(payloadBase64);
          return JSON.parse(payloadDecoded);
        }
        return null;
      }

      //research about jwt-decode because is not possible install with npm install jwt-decode
    hasPermission(role: string) {
        let user = this.jwtDecode() as Usuario;
        if(user.role == role)
            return true;
        else
            return false;

    }


}