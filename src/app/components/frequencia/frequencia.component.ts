import { Component } from '@angular/core';

interface Disciplina {
  nome: string;
  codigo: string;
  presentes: number;
  faltas: number;
  total: number;
  percentual: number;
  status: 'green' | 'yellow' | 'red';
  alertMsg: string | null;
}

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.component.html',
  styleUrls: ['./frequencia.component.scss']
})export class FrequenciaComponent {
  disciplinas: Disciplina[] = [
    { nome: 'Cálculo A', codigo: 'INF09292', presentes: 38, faltas: 2, total: 40, percentual: 10, status: 'green', alertMsg: null },
    { nome: 'Banco de Dados', codigo: 'INF09291', presentes: 37, faltas: 3, total: 40, percentual: 12, status: 'green', alertMsg: null },
    { nome: 'Eng. Software', codigo: 'INF09293', presentes: 31, faltas: 4, total: 35, percentual: 55, status: 'yellow', alertMsg: '⚠ Atenção: Você pode faltar mais 3 aulas' },
    { nome: 'Redes de Computadores', codigo: 'INF09293', presentes: 31, faltas: 8, total: 35, percentual: 88, status: 'red', alertMsg: '⚠ Reprovado por faltas' },
  ];

  disciplinaSelecionada: 'all' | Disciplina = 'all';

  ultimasPresencas = [
    { data: '07/07/2025', disciplina: 'Cálculo A', status: 'Presente' },
    { data: '05/07/2025', disciplina: 'Cálculo A', status: 'Falta' },
    { data: '13/07/2025', disciplina: 'Banco de Dados', status: 'Presente' },
    { data: '10/08/2025', disciplina: 'Eng. Software', status: 'Falta' },
    { data: '12/08/2025', disciplina: 'Redes de Computadores', status: 'Presente' },
  ];

  get disciplinasFiltradas(): Disciplina[] {
    return this.disciplinaSelecionada === 'all'
      ? this.disciplinas
      : [this.disciplinaSelecionada];
  }

  onDisciplinaChange(selecao: 'all' | Disciplina) {
    this.disciplinaSelecionada = selecao;
  }
get ultimasPresencasFiltradas() {
  if (this.disciplinaSelecionada === 'all') {
    return this.ultimasPresencas;
  }
  return this.ultimasPresencas.filter(
    up => up.disciplina === (this.disciplinaSelecionada as Disciplina).nome
  );
}

}
