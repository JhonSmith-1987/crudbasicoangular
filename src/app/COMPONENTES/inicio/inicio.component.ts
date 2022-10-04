import { Equipo, EquipoService } from './../../SERVICIOS/equipo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarEquipo:Equipo[] = [];

  constructor(
    private EquipoService:EquipoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listarEquipos();
  }

  listarEquipos(){
    this.EquipoService.getEquipos().subscribe(
      res => {
        console.log(res);
        this.ListarEquipo = <any>res;
      },
      err => console.log(err)
    );
  }

  eliminar(id:any){
    this.EquipoService.deleteEquipo(id).subscribe(
      res => {
        console.log('Equipo eliminado');
        this.listarEquipos();
      },
      err => console.log(err)
    );
  }

  modificar(id:any){
    this.router.navigate(['/edit/' + id]);
  }

}
