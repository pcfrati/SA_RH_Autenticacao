import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';

import { CurriculoFormComponent } from './views/curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './views/curriculo-list/curriculo-list.component';

import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vagas', component: VagasComponent },

  // Apenas logado pode cadastrar currículo
  { path: 'curriculo-form', component: CurriculoFormComponent, canActivate: [AuthGuard] },

  // Apenas admin pode ver currículos
  { path: 'curriculos', component: CurriculosComponent, canActivate: [AdminGuard] },
  { path: 'curriculo-list', component: CurriculoListComponent, canActivate: [AdminGuard] },

  // Apenas admin pode gerenciar vagas
  { path: 'painel-vagas', component: PainelVagasComponent, canActivate: [AdminGuard] },

  // Login e Registro liberados
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
