import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  senha = '';
  erro = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.erro = '';
    this.auth.login(this.email, this.senha).subscribe(user => {
      if (user) {
        // redireciona para home
        this.router.navigate(['/']);
      } else {
        this.erro = 'Email ou senha inválidos';
      }
    });
  }
}
