import { Component } from '@angular/core';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.scss']
})
export class AllDocumentsComponent {
  periodos = ['2023/2', '2023/1', '2022/2'];
  periodoSelecionado = this.periodos[0];
  
  onPeriodoChange(novoPeriodo: string) {
    this.periodoSelecionado = novoPeriodo;
  }
  
}
