import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})export class HorariosComponent implements OnInit {
  semanaInicio!: Date;
  semanaFim!: Date;
  semana: { nome: string; data: Date }[] = [];
  semanaOffset = 0; // controla qual semana estamos mostrando

  nomesDias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  ngOnInit() {
    this.setarSemana(new Date());
  }

  setarSemana(base: Date) {
    const diaSemana = base.getDay();
    const diffParaSegunda = diaSemana === 0 ? -6 : 1 - diaSemana;
    const segunda = new Date(base);
    segunda.setDate(base.getDate() + diffParaSegunda);
    this.semanaInicio = new Date(segunda);

    const sexta = new Date(segunda);
    sexta.setDate(segunda.getDate() + 4);
    this.semanaFim = sexta;

    this.semana = [];
    for (let i = 0; i < 5; i++) {
      const dia = new Date(segunda);
      dia.setDate(segunda.getDate() + i);
      this.semana.push({
        nome: this.nomesDias[dia.getDay()],
        data: dia,
      });
    }
  }

  voltarSemana() {
    this.semanaOffset--;
    const novaBase = new Date(this.semanaInicio);
    novaBase.setDate(this.semanaInicio.getDate() - 7);
    this.setarSemana(novaBase);
  }

  avancarSemana() {
    this.semanaOffset++;
    const novaBase = new Date(this.semanaInicio);
    novaBase.setDate(this.semanaInicio.getDate() + 7);
    this.setarSemana(novaBase);
  }

  getAulasDoDia(data: Date) {
    const diaSemana = data.getDay();

    if (this.semanaOffset % 3 === 0) {
      switch (diaSemana) {
        case 1:
          return [
            { horario: '08:00 - 10:00', conteudo: 'Prática', nome: 'Cálculo A', cod: 'INF09292', local: 'Sala 101', nomeProfessor: 'Prof. Silva' },
            { horario: '10:00 - 12:00', conteudo: 'Teórica', nome: 'Estruturas de Dados', cod: 'INF09293', local: 'Sala 102', nomeProfessor: 'Prof. Souza' }
          ];
        case 2:
          return [
            { horario: '09:00 - 11:00', conteudo: 'Teórica', nome: 'Banco de Dados', cod: 'INF09294', local: 'Sala 201', nomeProfessor: 'Prof. Lima' },
            { horario: '11:00 - 13:00', conteudo: 'Prática', nome: 'Engenharia de Software', cod: 'INF09295', local: 'Laboratório 3', nomeProfessor: 'Prof. Alves' }
          ];
        default:
          return [];
      }
    } else if (this.semanaOffset % 3 === 1) {
      switch (diaSemana) {
        case 1:
          return [
            { horario: '08:30 - 10:30', conteudo: 'Teórica', nome: 'Matemática Discreta', cod: 'MAT10001', local: 'Sala 201', nomeProfessor: 'Prof. Edmar' },
            { horario: '10:30 - 12:30', conteudo: 'Prática', nome: 'Programação Web', cod: 'INF20002', local: 'Laboratório 2', nomeProfessor: 'Prof. Giuliano' }
          ];
        case 3:
          return [
            { horario: '09:00 - 11:00', conteudo: 'Teórica', nome: 'Sistemas Distribuídos', cod: 'INF30003', local: 'Sala 301', nomeProfessor: 'Prof. Helder' }
          ];
        case 5:
          return [
            { horario: '08:00 - 10:00', conteudo: 'Prática', nome: 'Inteligência Artificial', cod: 'INF09299', local: 'Sala 105', nomeProfessor: 'Prof. Jacson' }
          ];
        default:
          return [];
      }
    } else {
      switch (diaSemana) {
        case 2:
          return [
            { horario: '08:00 - 10:00', conteudo: 'Prática', nome: 'Redes de Computadores', cod: 'INF40004', local: 'Laboratório 1', nomeProfessor: 'Prof. Helder' }
          ];
        case 4:
          return [
            { horario: '10:00 - 12:00', conteudo: 'Teórica', nome: 'Sistemas Operacionais', cod: 'INF09297', local: 'Laboratório 1', nomeProfessor: 'Prof. Rodrigo' },
            { horario: '13:00 - 15:00', conteudo: 'Prática', nome: 'Computação Gráfica', cod: 'INF09298', local: 'Sala 104', nomeProfessor: 'Prof. Paulo' }
          ];
        default:
          return [];
      }
    }
  }

  formatarData(data: Date): string {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    return `${dia}/${mes}`;
  }
}
