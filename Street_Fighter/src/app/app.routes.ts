import { Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AreaSeleccionComponent } from './componentes/area-seleccion/area-seleccion.component';
import { AntesLucharComponent} from './componentes/antes-luchar/antes-luchar.component';
import { ModificarRetratosComponent } from './componentes/modificar-retratos/modificar-retratos.component';

export const routes: Routes = [
    {path: 'bienvenida', component: BienvenidaComponent},
    {path: 'seleccion', component: AreaSeleccionComponent},
    {path: 'antes-luchar/:nombre', component: AntesLucharComponent},
    {path: 'modificar-retratos', component: ModificarRetratosComponent},
    {path: '', redirectTo: 'bienvenida', pathMatch: 'full'},
    {path: '**', redirectTo: 'bienvenida', pathMatch: 'full'}
];
