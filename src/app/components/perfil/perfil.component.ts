import { Component } from '@angular/core';
import { MOCK_USER } from 'src/app/interface/mock.user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  mockUserFoto = MOCK_USER.foto
}
