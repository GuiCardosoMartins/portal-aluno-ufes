import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss'],
})
export class NotasComponent {
periodos = ['2023/2', '2023/1', '2022/2'];
periodoSelecionado = this.periodos[0];

  disciplinas = [
    {periodo: '2023/2', nome: 'Banco de Dados', faltas: 3, status: 'Reprovado', COD: 'QUI101', Cred: 4, atividades: [
    {  nome: 'P1', notaRecebida: 9.3 },
    { nome: 'P2', notaRecebida: 7.3 },
  ], media: 3.9},

  {periodo: '2023/2',nome: 'Eng. Software', faltas: 3, status: 'Aprovado', COD: 'QUI101', Cred: 4, atividades: [
    { nome: 'P1', notaRecebida: 9.3 },
    { nome: 'P2', notaRecebida: 7.3 },
    { nome: 'P3', notaRecebida: 6.4 },
    { nome: 'Trabalho Prático', notaRecebida: 6.4 },
    ], media: 7.3},
  
  {periodo: '2022/2',nome: 'Algoritmos Númericos', faltas: 3, status: 'Aprovado', COD: 'QUI101', Cred: 4, atividades: [
    { nome: 'P1', notaRecebida: 9.3 },
    { nome: 'P2', notaRecebida: 7.3 },
    { nome: 'P3', notaRecebida: 6.4 },
    { nome: 'Trabalho Prático', notaRecebida: 6.4 },
    ], media: 7.3},
    
  {periodo: '2023/1', nome: 'Cálculo A', faltas: 3, status: 'Cursando', COD: 'QUI101', Cred: 4, atividades: [
    { nome: 'P1', notaRecebida: 9.3 },
    { nome: 'P2', notaRecebida: 7.3 },
    { nome: 'Trabalho Prático', notaRecebida: 6.4 },
    ], media: 9.5},
  ]

  selectedValue!: string;

  constructor() { }

  disciplinasFiltradas: any[] = [];

ngOnInit(): void {
  this.filtrarDisciplinas();
}

onPeriodoChange(novoPeriodo: string) {
  this.periodoSelecionado = novoPeriodo;
  this.filtrarDisciplinas();
}


filtrarDisciplinas() {
  this.disciplinasFiltradas = this.disciplinas.filter(d => d.periodo === this.periodoSelecionado);
}


  onSelectChange(event: any) {
    this.selectedValue = event.value;
  }

  getStatusClass(status: string): string {
    return status === 'Aprovado' ? 'text-green-500' : 'text-red-500';
  }

  getStatusIcon(status: string): string {
    return status === 'Aprovado' ? 'check_circle' : 'cancel';
  }

  getMediaColor(media: number): string {
    return media >= 7 ? 'text-green-500' : 'text-red-500';
  }

  getMediaIcon(media: number): string {
    return media >= 7 ? 'check_circle' : 'cancel';
  }

  getFaltasColor(faltas: number): string {
    return faltas > 5 ? 'text-red-500' : 'text-green-500';
  }

  getFaltasIcon(faltas: number): string {
    return faltas > 5 ? 'warning' : 'check_circle';
  }

  getNotaColor(nota: number): string {
    return nota >= 7 ? 'text-green-500' : 'text-red-500';
  }

  getNotaIcon(nota: number): string {
    return nota >= 7 ? 'check_circle' : 'cancel';
  }

  getNotaRecebidaColor(nota: number): string {
    return nota >= 7 ? 'text-green-500' : 'text-red-500';
  }

  getNotaRecebidaIcon(nota: number): string {
    return nota >= 7 ? 'check_circle' : 'cancel';
  }

  getMediaFinalColor(media: number): string {
    return media >= 7 ? 'text-green-500' : 'text-red-500';
  }

  getMediaFinalIcon(media: number): string {
    return media >= 7 ? 'check_circle' : 'cancel';
  }

  getCreditosColor(creditos: number): string {
    return creditos >= 4 ? 'text-green-500' : 'text-red-500';
  }
}
