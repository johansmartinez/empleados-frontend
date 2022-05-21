import { Component } from '@angular/core';
import { Empleados } from './modelos/empleados';
import { EmpleadosService } from './servicios/empleados.service';
import { ModalService } from './servicios/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMPLEADOS';

  constructor(public empleadosService:EmpleadosService, public modalService:ModalService){};

  mostrarDetalles(empleado:Empleados){
    this.empleadosService.seleccionar(empleado);
    this.modalService.setVisible(true);
  }
}
