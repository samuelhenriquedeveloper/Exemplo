import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario = new Usuario;

  mostrarErro: boolean = false;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  login(){
    if(!this.authService.fazerLogin(this.usuario))
      {
        this.mostrarErro = true;
      }
  }

}
