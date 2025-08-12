import { Component } from '@angular/core';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.scss']
})
export class AllDocumentsComponent {
  periodos = ['2025/1', '2024/2', '2024/1'];
  periodoSelecionado = this.periodos[0];
  
  onPeriodoChange(novoPeriodo: string) {
    this.periodoSelecionado = novoPeriodo;
  }
  
}
