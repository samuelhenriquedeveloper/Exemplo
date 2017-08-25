import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'sam' && 
      usuario.senha === '123') {

      this.usuarioAutenticado = true;

      localStorage.setItem('usuarioLogado',JSON.stringify(usuario));

      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado(){
    if(localStorage.getItem('usuarioLogado'))
        return true;
    return false;
  }

}