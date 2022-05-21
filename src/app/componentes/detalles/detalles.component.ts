import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/servicios/empleados.service';
import { ModalService } from 'src/app/servicios/modal.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(public empleadosService:EmpleadosService,public modalService:ModalService) { }

  ngOnInit(): void {
  }

}
