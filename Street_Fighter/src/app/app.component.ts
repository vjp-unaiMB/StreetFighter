import { Component } from '@angular/core';
import { AreaSeleccionComponent } from './componentes/area-seleccion/area-seleccion.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AreaSeleccionComponent], //Importamos el componente Area-Seleccion
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { //Dentro de la clase de este componente padre no tenemso nada porque no habrá lógica aquí.
}
