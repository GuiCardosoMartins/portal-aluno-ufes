import { Component } from '@angular/core';

interface QuickStat {
  label: string;
  value: string;
  icon: string; // vamos usar nome do ícone e renderizar no template
  color: string;
}

interface Event {
  title: string;
  date: string;
  time: string;
  type: string;
  status: string;
}

interface Grade {
  subject: string;
  grade: number;
  status: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  upcomingEvents: Event[] = [
    { title: 'Prova de Cálculo C', date: '15 Nov', time: '14:00', type: 'prova', status: 'urgent' },
    { title: 'Entrega do Projeto', date: '18 Nov', time: '23:59', type: 'trabalho', status: 'normal' },
    { title: 'Seminário de IA', date: '22 Nov', time: '10:00', type: 'aula', status: 'normal' },
  ];

  recentGrades: Grade[] = [
    { subject: 'Redes de Computadores', grade: 9.5, status: 'excellent' },
    { subject: 'Banco de Dados', grade: 7.8, status: 'good' },
    { subject: 'Eng. Software', grade: 8.2, status: 'good' },
  ];

  getEventColor(status: string): string {
    switch (status) {
      case 'urgent': return 'red';
      case 'normal': return 'gray';
      default: return 'gray';
    }
  }

  getGradeColor(status: string): string {
    switch (status) {
      case 'excellent': return 'green';
      case 'good': return 'blue';
      case 'warning': return 'orange';
      case 'poor': return 'red';
      default: return 'gray';
    }
  }
}
