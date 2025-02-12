import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioLuchadoresService } from './../../servicios/servicio-luchadores.service';
import { AtributosLuchadorComponent } from './../atributos-luchador/atributos-luchador.component';

@Component({
  selector: 'app-area-seleccion',
  standalone: true,
  imports: [CommonModule, AtributosLuchadorComponent],//Importamos el componente HIJO "AtributosLuchadorComponent" y common module porque usaremos directivas de ángular en la vista
  templateUrl: './area-seleccion.component.html',
  styleUrls: ['./area-seleccion.component.scss']
})

//Implementamos OnInit para que al cargar el componente se ejecute todo el código que hay dentro de ngOnInit
export class AreaSeleccionComponent implements OnInit {
  //Decaramos todas las variables a usar
  luchadores: any[] = []; 
  seleccionado: number = 0; // Índice del luchador seleccionado

  estadoDisplay: string = "none";
  animacion: string = "";
  fuerza: number = 0;
  destreza: number = 0;
  vida: number = 0;
  nombre: string = "";

  constructor(private servicioLuchadores: ServicioLuchadoresService) {}

  //Al cargar el componente se ejecuta ngOnInit para obtener los luchadores y llamando al método del servicio y seleccionar el primero. 
  ngOnInit(): void {
    this.luchadores = this.servicioLuchadores.getluchadores();
    if (this.luchadores.length > 0) {
      this.AsignarDatosLuchador(this.luchadores[this.seleccionado]);
    }
  }

  //Función para seleccionar un luchador según la dirección del teclado (izquierda o derecha). En el caso de hacer click en uno, cambiará los valores por deefecto del personaje para mostrar
  //su animación y posteriormente exportar sus atributos al componente hijo "AtributosLuchadorComponent" que mostrará sus Stats
  AsignarDatosLuchador(luchador: any) {
    this.animacion = luchador.animacion;
    this.fuerza = luchador.fuerza;
    this.destreza = luchador.destreza;
    this.vida = luchador.vida;
    this.nombre = luchador.nombre;
    this.estadoDisplay = "block";
  }

   //Función para escuchar las teclas del teclado y seleccionar un luchador según la dirección del teclado (izquierda o derecha) empleando el recurso importado "@HostListener"
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.seleccionarLuchador(-1);
    }
    if (event.key === 'ArrowRight') {
      this.seleccionarLuchador(1);
    }
  }

  seleccionarLuchador(direccion: number) {
    this.seleccionado = (this.seleccionado + direccion + this.luchadores.length) % this.luchadores.length;
    this.AsignarDatosLuchador(this.luchadores[this.seleccionado]);
  }
}