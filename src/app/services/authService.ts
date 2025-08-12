import { Injectable } from '@angular/core';
import { MOCK_USER } from '../interface/mock.user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedUser: any = null;

  login(email: string, senha: string): boolean {
    if (email === MOCK_USER.email && senha === MOCK_USER.senha) {
      this.loggedUser = MOCK_USER;
      return true;
    }
    return false;
  }

  getUser() {
    return this.loggedUser;
  }

  logout() {
    this.loggedUser = null;
  }
}
