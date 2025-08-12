import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotasComponent } from './components/notas/notas.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { FrequenciaComponent } from './components/frequencia/frequencia.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AllDocumentsComponent } from './components/all-documents/all-documents.component';
import { AddAtivComplementarComponent } from './components/add-ativ-complementar/add-ativ-complementar.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { ConfirmExitGuard } from './guards/confirm-exit.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'horarios', component: HorariosComponent },
  { path: 'frequencia', component: FrequenciaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'all-documents', component: AllDocumentsComponent },
  { path: 'add-ativ-complementar', component: AddAtivComplementarComponent, canDeactivate: [ConfirmExitGuard] },
  { path: 'configuracoes', component: ConfiguracoesComponent, canDeactivate: [ConfirmExitGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
