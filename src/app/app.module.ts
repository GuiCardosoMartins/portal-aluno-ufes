import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddAtivComplementarComponent } from './components/add-ativ-complementar/add-ativ-complementar.component';
import { AllDocumentsComponent } from './components/all-documents/all-documents.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrequenciaComponent } from './components/frequencia/frequencia.component';
import { HeaderComponent } from './components/header/header.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { NotasComponent } from './components/notas/notas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddAtivComplementarComponent,
    AllDocumentsComponent,
    ConfiguracoesComponent,
    DashboardComponent,
    FooterComponent,
    FrequenciaComponent,
    HeaderComponent,
    HorariosComponent,
    LoginComponent,
    NotasComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
