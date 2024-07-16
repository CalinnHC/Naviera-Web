import { Component, ViewChild } from '@angular/core';
import { EntidadService } from '../../entidad.service';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrl: './register-card.component.css'
})
export class RegisterCardComponent {
  today = new Date();
  success = true  
  tableName: string = 'Cliente';
  objectKeys = Object.keys;

  guardaGoles: any = {
    Cedula: 1,
    Nombre_Completo: 'Erick Lopez',
    Direccion: 'Panamá',
    Telefono: 60000000,
    Correo_Electronico: 'eric@gmail.com',
    Contrasena: 'Erick'
  };

  data: any = {
    ID_Cliente: this.guardaGoles.Cedula,
    Nombre_Cliente: this.guardaGoles.Nombre_Completo,
    Direccion: this.guardaGoles.Direccion,
    Telefono: this.guardaGoles.Telefono,
    Correo_Electronico: this.guardaGoles.Correo_Electronico,
    ID_Auditoria: 1
  };

  usuarioSistema: any = {
    ID_Usuario: this.data.ID_Cliente,
    Nombre_Usuario: this.data.Nombre_Cliente,
    Contrasena: this.guardaGoles.Contrasena,
    ID_Rol: '2',
    Fecha_Creacion: this.formatDate(this.today), // Ajustamos a formato SQL para asegurar compatibilidad con Oracle
    Ultimo_Acceso: this.formatDate(this.today), // Ajustamos a formato SQL para asegurar compatibilidad con Oracle
    Correo_Electronico: this.data.Correo_Electronico
  };

  constructor(private entidadService: EntidadService) { }

  insertData() {
    // Ajustamos los datos que realmente queremos enviar al API
    const datosEnviar = {
      ID_Cliente: this.guardaGoles.Cedula,
      Nombre_Cliente: this.guardaGoles.Nombre_Completo,
      Direccion: this.guardaGoles.Direccion,
      Telefono: this.guardaGoles.Telefono,
      Correo_Electronico: this.guardaGoles.Correo_Electronico,
      ID_Auditoria: this.data.ID_Auditoria
    };

    const usuarioEnviar = {
      ID_Usuario: this.guardaGoles.Cedula,
      Nombre_Usuario: this.guardaGoles.Nombre_Completo,
      Contrasena: this.guardaGoles.Contrasena,
      ID_Rol: 2,
      Correo_Electronico: this.guardaGoles.Correo_Electronico
    };

    this.entidadService.insertarDatos(this.tableName, datosEnviar, usuarioEnviar).subscribe(
      response => {
        console.log('Datos insertados correctamente: ', response);
        this.mostrarNotificacion();
      },
      error => {
        console.log('Error al insertar datos: ', error);
      }
    );
  }

  @ViewChild('notification') notificationComponent!: NotificationComponent;
  mostrarNotificacion(): void {
    this.notificationComponent.showNotification('Te has registrado correctamente.');
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `TO_DATE('${year}-${month}-${day}', 'YYYY-MM-DD')`;
  }
}
