import { Component } from '@angular/core';
import { MOCK_USER } from 'src/app/interface/mock.user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user = {
    nome: MOCK_USER.nome,
    curso: MOCK_USER.curso,
    foto: 'assets/User.svg'
  };

  mockUserFoto = MOCK_USER.foto
  notificacoesCount = 3;

  notificacoes = [
    { texto: 'Prova de Banco de Dados amanhã', data: '09/08/2025' },
    { texto: 'Faltou 1 aula de Algoritmos II', data: '05/08/2025' },
    { texto: 'Nova nota disponível em Eng. Software', data: '02/08/2025' }
  ];

  tooltipAberto = false;

  toggleTooltip() {
    this.tooltipAberto = !this.tooltipAberto;
  }
}

