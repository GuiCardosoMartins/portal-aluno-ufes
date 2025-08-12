import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guards/confirm-exit.guard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-ativ-complementar',
  templateUrl: './add-ativ-complementar.component.html',
  styleUrls: ['./add-ativ-complementar.component.scss'],
})
export class AddAtivComplementarComponent implements CanComponentDeactivate{
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this._initForm();
  }

  private _initForm() {
    this.form = this.fb.group({
      descricao: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required, Validators.minLength(6)]],
      dataInicio: ['', [Validators.required]],
      dataFim: ['', [Validators.required]],
      horas: ['', [Validators.required, Validators.min(1)]],
      comprovante: ['', [Validators.required]],
      observacao: ['', []],
    });
  }
  salvar() {
    if (this.form.valid) {
      Swal.fire({
    title: 'Atividade Complementar Adicionada',
    text: 'A atividade complementar foi adicionada com sucesso e o coordenador do seu curso irá avaliá-la!',
    icon: 'success',
    confirmButtonText: 'OK',
  }).then(() => {
    this.form.reset();
  });
    } else {
      this.form.markAllAsTouched();
    }
  }

  voltar(){
    this.router.navigate(['/perfil']);
  }

  confirmar() {
  Swal.fire({
    title: 'Tem certeza?',
    text: 'Os dados alterados serão perdidos!',
    icon: 'warning',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Sim, quero!',
    reverseButtons: true,               
    cancelButtonColor: '#d33',          
    confirmButtonColor: '#004080'      
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigate(['/perfil']);
    }
  });
}

canDeactivate(): Promise<boolean> | boolean {
    if (this.form.dirty) {
      return Swal.fire({
        title: 'Tem certeza que deseja sair?',
        text: 'As alterações não salvas serão perdidas!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, sair',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      }).then(result => {
        return !!result.isConfirmed;
      });
    }
    return true;
  }

}
