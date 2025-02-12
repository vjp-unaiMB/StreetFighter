import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioLuchadoresService } from './../../servicios/servicio-luchadores.service';
import { AtributosLuchadorComponent } from './../atributos-luchador/atributos-luchador.component';

@Component({
  selector: 'app-area-seleccion',
  imports: [CommonModule,AtributosLuchadorComponent],
  templateUrl: './area-seleccion.component.html',
  styleUrls: ['./area-seleccion.component.scss']
})
export class AreaSeleccionComponent implements OnInit {
  luchadores: any[] = [];

  constructor(private servicioLuchadores: ServicioLuchadoresService) {}
  animacion: string =  "";
  fuerza: number = 0;
  destreza: number = 0;
  vida: number = 0;
  nombre: string = "";

  AsignarDatosLuchador(luchador:any){
    this.animacion= luchador.animacion;
    this.fuerza= luchador.fuerza;
    this.destreza= luchador.destreza;
    this.vida= luchador.vida;
    this.nombre= luchador.nombre;
  }

  ngOnInit(): void {
    this.luchadores = this.servicioLuchadores.getluchadores();
  }
}