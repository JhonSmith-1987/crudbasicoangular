import { Router, ActivatedRoute } from '@angular/router';
import { Equipo, EquipoService } from './../../SERVICIOS/equipo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  equipo:Equipo = {
    id_equipo:'',
    nombre:'',
    logo:''
  }

  datos:any;

  constructor(
    private equipoService:EquipoService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id_entrada:any = <any>this.activatedRoute.snapshot.params['id'];
    console.log('id de entrada: ' + id_entrada);

    if(id_entrada){
      this.equipoService.getUnEquipo(id_entrada).subscribe(
        res => {
          this.datos = res;
          this.equipo = this.datos[0];
          console.log(this.equipo);
        },
        err => console.log(err)
      );
    } 
  }

  modificar(){
    this.equipoService.editEquipo(this.equipo.id_equipo, this.equipo).subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    );
    this.router.navigate(['/inicio'])
  }

}
