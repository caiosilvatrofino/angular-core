import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactForm {
  nome: string;
  email: string;
  telefone?: string; // Opcional
  mensagem: string;
}

@Component({
  selector: 'app-contato',
  imports: [FormsModule, CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
  formData: ContactForm = { nome: '', email: '', telefone: '', mensagem: '' };
  submissionMessage: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      this.submissionMessage = '';
      this.errorMessage = '';

      this.http.post<{ message: string }>('http://localhost:8080/api/contato/send', {
        name: this.formData.nome,
        email: this.formData.email,
        phone: this.formData.telefone,
        message: this.formData.mensagem
      }, {
        headers: { 'Content-Type': 'application/json' }
      })
      .subscribe({
        next: (response) => {
          this.submissionMessage = response.message;
          this.formData = { nome: '', email: '', telefone: '', mensagem: '' };
          form.resetForm();
          this.loading = false;
        },
        error: (error) => {
          console.error('Erro ao enviar o formulário:', error);
          this.errorMessage = 'Erro ao enviar a mensagem. Tente novamente mais tarde.';
          this.loading = false;
        }
      });
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios corretamente.';
    }
  }
  
}