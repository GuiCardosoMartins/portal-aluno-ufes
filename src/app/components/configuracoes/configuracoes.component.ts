import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guards/confirm-exit.guard';
import { MOCK_CONFIG } from 'src/app/interface/mock.configs';
import { MOCK_USER } from 'src/app/interface/mock.user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss'],
})
export class ConfiguracoesComponent implements OnInit, CanComponentDeactivate {
  abaAtiva: string = 'pessoal';
  formPessoal!: FormGroup;
  formSeguranca!: FormGroup;
  mockUserFoto = MOCK_USER.foto;

  constructor(private fb: FormBuilder, private router: Router) {}

  estados: string[] = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  ngOnInit() {
    this.formPessoal = this.fb.group({
      nome: [MOCK_USER.nome, [Validators.required, Validators.minLength(3)]],
      email: [MOCK_USER.email, [Validators.required, Validators.email]],
      telefone: [MOCK_CONFIG.telefone, [Validators.required]],
      rua: [MOCK_CONFIG.rua, Validators.required],
      cidade: [MOCK_CONFIG.cidade, Validators.required],
      estado: [MOCK_CONFIG.estado, Validators.required],
      foto: [MOCK_USER.foto],
    });

    this.formSeguranca = this.fb.group(
      {
        senhaAtual: ['', [Validators.required, Validators.minLength(6)]],
        novaSenha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', [Validators.required]],
      },
      { validators: this.senhasIguais }
    );
    this.formPessoal.valueChanges.subscribe((val) => {
      MOCK_USER.nome = val.nome;
      MOCK_USER.email = val.email;
      MOCK_CONFIG.telefone = val.telefone;
      MOCK_CONFIG.rua = val.rua;
      MOCK_CONFIG.cidade = val.cidade;
      MOCK_CONFIG.estado = val.estado;
      MOCK_USER.foto = val.foto;
    });
    this.formSeguranca.valueChanges.subscribe((val) => {
      if (this.formSeguranca.valid) {
        MOCK_USER.senha = val.novaSenha;
      }
    });
  }

  voltar() {
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
      confirmButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/perfil']);
      }
    });
  }

  verificarAlteracao() {
    if (this.abaAtiva === 'pessoal') {
      return this.formPessoal.dirty;
    } else if (this.abaAtiva === 'seguranca') {
      return this.formSeguranca.dirty;
    }
    return false;
  }

  selecionarAba(aba: string) {
    this.abaAtiva = aba;
  }

  onSubmitPessoal() {
    if (this.formPessoal.valid) {
      const val = this.formPessoal.value;

      MOCK_USER.nome = val.nome;
      MOCK_USER.email = val.email;
      MOCK_CONFIG.telefone = val.telefone;
      MOCK_CONFIG.cidade = val.cidade;
      MOCK_CONFIG.estado = val.estado;
      if (val.foto) {
        MOCK_USER.foto = this.mockUserFoto;
      }

      Swal.fire({
        icon: 'success',
        title: 'Salvo!',
        text: 'As informações pessoais foram atualizadas com sucesso.',
        timer: 2500,
        showConfirmButton: false,
      });

      this.formPessoal.markAsPristine();
    } else {
      this.formPessoal.markAllAsTouched();
    }
  }

  onSubmitSeguranca() {
    if (this.formSeguranca.valid) {
      const val = this.formSeguranca.value;

      MOCK_USER.senha = val.novaSenha;

      Swal.fire({
        icon: 'success',
        title: 'Salvo!',
        text: 'A senha foi atualizada com sucesso.',
        timer: 2500,
        showConfirmButton: false,
      });

      this.formSeguranca.reset();
    } else {
      this.formSeguranca.markAllAsTouched();
    }
  }

  onFotoSelecionada(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formPessoal.patchValue({ foto: file });
      this.mockUserFoto = URL.createObjectURL(file);
      MOCK_USER.foto = this.mockUserFoto;
      this.formPessoal.markAsDirty();
    }
  }

  private senhasIguais(group: FormGroup) {
    const novaSenha = group.get('novaSenha')?.value;
    const confirmarSenha = group.get('confirmarSenha')?.value;
    return novaSenha === confirmarSenha ? null : { senhasDiferentes: true };
  }

  canDeactivate(): Promise<boolean> | boolean {
  if (this.formPessoal.dirty || this.formSeguranca.dirty) {
    return Swal.fire({
      title: 'Tem certeza que deseja sair?',
      text: 'As alterações não salvas serão perdidas!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, sair',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    }).then((result) => {
      return !!result.isConfirmed;
    });
  }
  return true;
}

}
