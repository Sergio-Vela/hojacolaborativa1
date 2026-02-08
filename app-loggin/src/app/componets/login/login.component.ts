import { Component, inject, OnInit } from '@angular/core';
import { Login } from '../../interfaces/loginDto';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  private loginService = inject(LoginService);

  username: string = '';
  password: string = '';

  login() {
    //espacios en blanco
    if (this.username.trim() === '' || this.password.trim() === '') {
      console.log("Usuario y contraseña son obligatorios");
      return;
    }

    //longitun del usuario minima
    if (this.username.length < 4){
      console.log("El nombre de usuario debe tener al menos 4 caracteres");
      return;
    }

    //longitud minima de la contraseña
    if (this.password.length > 6){
      console.log("La contraseña no puede tener más de 6 caracteres");
      return;
    }

    const objectRequest: Login = {
      username: this.username,
      password: this.password,
    };

    this.loginService.doLogin(objectRequest).subscribe({
      
      next: (entry) => {
        console.log('Login exitoso:');
      },
      
      error: (err) => {
        console.error('Credenciales incorrectas o error del servidor:', err);
      },
    });
  }
}
