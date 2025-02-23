import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServicioLuchadoresService } from '../../servicios/servicio-luchadores.service';

@Component({
  selector: 'app-item-retrato',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './item-retrato.component.html',
  styleUrls: ['./item-retrato.component.scss']
})
export class ItemRetratoComponent implements OnInit {

  //Variables del form
  edicionForm: FormGroup;
  archivo: FormControl;

  //Inicializamos nuestro servicio y nuestro formulario reactivo con el construcctor
  constructor(private servicioLuchadores: ServicioLuchadoresService) {
    this.archivo = new FormControl('');
    this.edicionForm = new FormGroup({
      archivo: this.archivo
    });
  } 
 
  //recogemos el luchador del padre
  @Input() 
  luchador!: any;

  ngOnInit(): void {}

  //aplicamos al luchador un nuevo valor obtenido por el formulario reactivo y lo actualizamos con nuestro servicio.
  actualizarProducto() {
    const imagen = this.edicionForm.get("archivo")?.value;

    if (!imagen) {
      console.log("Vacío");
    }else{
      this.luchador.retrato = imagen;

      console.log("Actualizando luchador:", this.luchador); 
      
      this.servicioLuchadores.guardarLuchador(this.luchador).subscribe(
        p => console.log('Actualizado el producto ' + p),
        error => console.log(error)
      );
    }
  }
}
