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
  this.authErrorMessage = null;

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  const { email, password } = this.loginForm.value;

  if (email === MOCK_USER.email) {
    if (password === MOCK_USER.senha) {
      sessionStorage.setItem('mockUser', JSON.stringify({
        email: MOCK_USER.email,
        nome: 'Guilherme Cardoso'
      }));
      this.router.navigate(['/dashboard']);
    } else {
      this.authErrorMessage = 'Senha inválida.';
      this.loginForm.get('password')?.setErrors({ invalidPassword: true });
    }
  } else {
    this.authErrorMessage = 'Esta conta não está cadastrada.';
    this.loginForm.get('email')?.setErrors({ invalidEmail: true });
  }
}


  onForgotPassword() {
    window.open('https://senha.ufes.br/site/recuperaCredenciais', '_blank');
  }
}
