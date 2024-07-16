import { Component, ViewChild } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { EntidadService } from '../../entidad.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrl: './delete-account.component.css'
})
export class DeleteAccountComponent {
  cedula: number = 18;
  contrasena: string = "juan";
  
  constructor(private entidadService: EntidadService) { }

  eliminarUsuario(): void {
    if (this.cedula && this.contrasena) {
      this.entidadService.eliminarUsuario(this.cedula, this.contrasena)
        .subscribe(
          response => {
            console.log('Usuario eliminado exitosamente', response);
            this.mostrarNotificacion('Usuario eliminado exitosamente');
          },
          error => {
            console.error('Error al eliminar usuario', error);
            this.mostrarNotificacion('Error al eliminar usuario');
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
