import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioLuchadoresService } from '../../servicios/servicio-luchadores.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-antes-luchar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './antes-luchar.component.html',
  styleUrls: ['./antes-luchar.component.scss']
})

//Implementamos OnInit para que al cargar el componente se ejecute todo el código que hay dentro de ngOnInit
export class AntesLucharComponent implements OnInit {
  //Importamos los luchadores y un luchador a parte del servicio de carga de luchadores. Este luchador individual depende del nombre.
  //Este nombre lo obtenemos del parámetro que se pasa al acceder a esta vista mediante la ruta.
  luchadores: any[] = []; 
  luchador?: any; 
  nombreLuchador: string ="";
  luchadorAleatorio?: any; 

  constructor(private servicioLuchadores: ServicioLuchadoresService, private route: ActivatedRoute) {}

  escogerLuchadorAleatorio() {
    if (this.luchadores.length > 0) {
      const numAl = Math.floor(Math.random() * this.luchadores.length);
      this.luchadorAleatorio = this.luchadores[numAl];
    } else {
      console.log("No hay luchadores disponibles.");
    }
  }

  //Al cargar el componente se ejecuta ngOnInit para obtener los luchadores y llamando al método del servicio y seleccionar el primero. 
  ngOnInit(): void {

    //Obtenemos el nombre del luchador por parámetro de la ruta
    this.nombreLuchador = String(this.route.snapshot.params['nombre']);

    //obtenemos todos los luchadores para generar el enemigo aleatorio
    this.servicioLuchadores.getLuchadores().subscribe(
      listaLuchadores => {
        this.luchadores = listaLuchadores;
        this.escogerLuchadorAleatorio();
      },
      error=>console.log(error),
      () => console.log('Fin del observable GetLuchadores')
    );

    //obtenemos el luchador seleccionado gracias al nombre dado por parámetro de ruta
    this.servicioLuchadores.getLuchador(this.nombreLuchador).subscribe(
      luchadorObt => {
        this.luchador = luchadorObt;
      },
      error=>console.log(error),
      () => console.log('Fin del observable Get Luchador')
    );
    
  }
  
}