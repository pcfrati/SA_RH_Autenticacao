// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, switchMap, throwError, map, of } from 'rxjs';
import { Usuario, UserTipo } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3013/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private http: HttpClient, private router: Router) {}

  //* função para registrar um novo usuário
  registrar(dados: Omit<Usuario, 'id' | 'tipo'> & { tipo?: UserTipo }): Observable<Usuario> {
    const payload: Usuario = { ...dados, tipo: dados.tipo ?? 'usuario' };
    return this.http.get<Usuario[]>(`${this.apiUrl}?email=${encodeURIComponent(dados.email)}`).pipe(
      switchMap(users => {
        if (users.length > 0) {
          return throwError(() => new Error('Usuário já existe.'));
        }
        return this.http.post<Usuario>(this.apiUrl, payload).pipe(
          map(user => {
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(user));
            return user;
          })
        );
      })
    );
  }

  //* função para logar o usuário
  login(email: string, senha: string): Observable<boolean> {
    return this.http.get<Usuario[]>(`${this.apiUrl}?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`).pipe(
      map(users => {
        if (users.length > 0) {
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(users[0]));
          return true;
        }
        return false;
      })
    );
  }

  //* função de logout
  logout(): void {
    localStorage.removeItem(this.CHAVE_AUTH);
    this.router.navigate(['/login']);
  }

  //* função para verificar se o usuário está autenticado
  estaAutenticado(): boolean {
    return !!localStorage.getItem(this.CHAVE_AUTH);
  }

  //* função para pegar as informações do usuário atual
  usuarioAtual(): Usuario | null {
    const raw = localStorage.getItem(this.CHAVE_AUTH);
    return raw ? JSON.parse(raw) : null;
  }

  //* função auxiliar para verificar se é admin
  isAdmin(): boolean {
    const user = this.usuarioAtual();
    return user?.tipo === 'admin';
  }
}
