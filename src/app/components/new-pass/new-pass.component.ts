import { Component, ViewChild } from '@angular/core';
import { EntidadService } from '../../entidad.service';
import { NotificationComponent } from '../notification/notification.component';
@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrl: './new-pass.component.css'
})
export class NewPassComponent {

  cedula: number = 18;
  nuevaContrasena: string = "juan";
  
  constructor(private entidadService: EntidadService) { }

  cambiarContrasena(): void {
    if (this.cedula && this.nuevaContrasena) {
      this.entidadService.cambiarContrasena(this.cedula, this.nuevaContrasena)
        .subscribe(
          response => {
            console.log('Contraseña cambiada exitosamente', response);
            this.mostrarNotificacion('Contraseña cambiada exitosamente');
          },
          error => {
            console.error('Error al cambiar contraseña', error);
            this.mostrarNotificacion('Error al cambiar contraseña');
          }
        );
    } else {
      console.error('Debe completar todos los campos del formulario.');
      this.mostrarNotificacion('Debe completar todos los campos del formulario.');
    }
  }
  @ViewChild('notification') notificationComponent!: NotificationComponent;
  mostrarNotificacion(message:string): void {
    this.notificationComponent.showNotification('Contraseña cambiada');
  }
}