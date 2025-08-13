import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  nome = '';
  email = '';
  senha = '';
  erro = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.erro = '';
    this.auth.registrar({ nome: this.nome, email: this.email, senha: this.senha }).subscribe({
      next: (user) => {
        // Registro bem-sucedido, redireciona
        this.router.navigate(['/']);
      },
      error: (err) => {
        if (err.message === 'Usuário já existe.') {
          this.erro = 'Este email já está registrado.';
        } else {
          this.erro = 'Erro ao registrar. Tente novamente.';
        }
      }
    });
  }
}
