import { Router } from '@angular/router';
import { Equipo, EquipoService } from './../../SERVICIOS/equipo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  equipo:Equipo = {
    id_equipo:'',
    nombre:'',
    logo:''
  };

  constructor(
    private EquipoService:EquipoService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.equipo.id_equipo;
    this.EquipoService.addEquipo(this.equipo).subscribe();
    this.router.navigate(['/inicio'])
  }

}
