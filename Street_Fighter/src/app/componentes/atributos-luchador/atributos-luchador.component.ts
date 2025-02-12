import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atributos-luchador',
  imports: [],
  templateUrl: './atributos-luchador.component.html',
  styleUrl: './atributos-luchador.component.scss'
})
export class AtributosLuchadorComponent {
  
  @Input() 
  nombre: string = "";

  @Input() 
  fuerza: number = 0;

  @Input() 
  destreza: number = 0;
  
  @Input() 
  vida: number = 0;
 
}
