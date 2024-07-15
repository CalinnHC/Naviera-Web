import { Component } from '@angular/core';
import { EntidadService } from '../../entidad.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.css'
})
export class ShowUserComponent {
  usuarios: any[] = [];

  constructor(private entidadService: EntidadService) { }

  ngOnInit(): void {
    this.entidadService.consultarUsuarios()
      .subscribe(
        data => {
          this.usuarios = data;
          console.log(data);
        },
        error => {
          console.error('Error al consultar usuarios: ', error);
          return throwError(error);
        }
      );
  }
}
