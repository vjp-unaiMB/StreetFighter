import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioLuchadoresService } from '../../servicios/servicio-luchadores.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ItemRetratoComponent} from '../item-retrato/item-retrato.component'

@Component({
  selector: 'app-modificar-retratos',
  standalone: true,
  imports: [
    RouterModule,
    ItemRetratoComponent ,
    CommonModule
  ],
  templateUrl: './modificar-retratos.component.html',
  styleUrls: ['./modificar-retratos.component.scss']
})


export class ModificarRetratosComponent implements OnInit {

  luchadores: any[] = []; 

  //Inicializamos el servicio
  constructor(private servicioLuchadores: ServicioLuchadoresService) {}

  //Llamamos al método que nos otorga todos los luchadores del servicio antes que nada
  ngOnInit(): void {
    this.servicioLuchadores.getLuchadores().subscribe(
      listaLuchadores => {
        this.luchadores = listaLuchadores;
      },
      error=>console.log(error),
      () => console.log('Fin del observable')
    );
  }
}