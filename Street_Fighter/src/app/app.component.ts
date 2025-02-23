import { Component } from '@angular/core';
import { AreaSeleccionComponent } from './componentes/area-seleccion/area-seleccion.component';
import { ServicioLuchadoresService } from './servicios/servicio-luchadores.service';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AreaSeleccionComponent,//Importamos el componente Area-Seleccion
            HttpClientModule,//Inportamos el módulo de cliente HTTP para obtener los datos de la API
            RouterModule], //Importamos el router module para poder emplear el vambio de vistas con el nav.
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  //traemos el servicio de carga de datos en providers
  providers: [ServicioLuchadoresService]
})
export class AppComponent { //Dentro de la clase de este componente padre no tenemso nada porque no habrá lógica aquí.
}
