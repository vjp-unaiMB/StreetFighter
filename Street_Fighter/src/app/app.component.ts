import { Component } from '@angular/core';
import { AreaSeleccionComponent } from './componentes/area-seleccion/area-seleccion.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AreaSeleccionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Street_Fighter';
}
