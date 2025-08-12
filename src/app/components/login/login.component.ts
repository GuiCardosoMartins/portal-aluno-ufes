import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MOCK_USER } from 'src/app/interface/mock.user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  authErrorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this._initForm();
  }

  private _initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    // limpa erro visual anterior
    this.authErrorMessage = null;
    // se form inválido, marca tudo pra mostrar erros de validação
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    if (email === MOCK_USER.email && password === MOCK_USER.senha) {
      // login ok: opcional -> salvar mock na sessão pra outras telas consumirem
      sessionStorage.setItem('mockUser', JSON.stringify({ email: MOCK_USER.email, nome: 'Guilherme Cardoso' }));
      this.router.navigate(['/dashboard']);
    } else {
      // credenciais inválidas
      this.authErrorMessage = 'Esta conta não está cadastrada.';
      // define erro de nível de form para facilitar estilização
      this.loginForm.setErrors({ invalidCredentials: true });
      // marca campos tocados para que o UI mostre bordas/erros
      this.loginForm.get('email')?.markAsTouched();
      this.loginForm.get('password')?.markAsTouched();
    }
  }

  onForgotPassword() {
    window.open('https://senha.ufes.br/site/recuperaCredenciais', '_blank');
  }
}
