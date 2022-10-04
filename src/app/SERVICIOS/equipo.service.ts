import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = '/api';

  constructor(
    private http:HttpClient
  ) { }

  //Recuperar equipos de la database
  getEquipos(){
    return this.http.get(this.url);
  }

  //Recuperar un solo equipo por id
  getUnEquipo(id:any){
    return this.http.get(this.url + '/' + id);
  }

  //Agregar un equipo
  addEquipo(equipo:Equipo){
    return this.http.post(this.url, equipo);
  }

  // Eliminar un equipo por id
  deleteEquipo(id:any){
    return this.http.delete(this.url + '/' + id);
  }

  // Modificar un equipo
  editEquipo(id:any, equipo:Equipo){
    return this.http.put(this.url + '/' + id, equipo);
  }

}

export interface Equipo {
  id_equipo?:string;
  nombre?:string;
  logo?:string;
}
