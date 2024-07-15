import { Component, OnInit } from '@angular/core';
import { EntidadService } from '../../entidad.service';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})

export class LoginCardComponent{
  username: string = '';
  password: string = '';
  userData: any = null;

  constructor(private entidadService: EntidadService, private router: Router) {}

  onSubmit(): void {
    this.entidadService.logUser(this.username, this.password).subscribe(
      response => {
        console.log('Autenticación exitosa', response);
        this.userData = response; 
        this.router.navigate(['/users']);
      },
      error => {
        console.error('Error de autenticación', error);
      }
    );
  }
}
