import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private apiUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) { }

  consultarUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/consulta`).pipe(catchError(error => {
          console.error('Error al consultar tablas: ', error);
          throw error;
        })
      );
  }
  insertarDatos(tableName: string, data: any, usuarioSistema: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { table_name: tableName, data: data, usuarioSistema: usuarioSistema });
  }
  logUser(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/logUser`, body);
  }
}