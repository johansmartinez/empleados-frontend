import { Injectable } from '@angular/core';
import data from '../../assets/MOCK_DATA.json';
import { Empleados } from '../modelos/empleados';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService{

  seleccionado:Empleados={
    nombre:'',
    apellido:'',
    avatar:'',
    documento:'',
    telefono:'',
    correo:'',
    profesion:'',
    pais:'',
    ciudad:''
  };
  searchValue:string='';
  empleados:Empleados[]=data;
  
  constructor() { }
  
  update(){
    this.empleados=(this.searchValue==='')?data: data.filter(e=>{
      let name=e.nombre.toUpperCase()+" "+ e.apellido.toUpperCase();
      return name.includes(this.searchValue.toUpperCase());
    });
  }

  seleccionar(empleado:Empleados){
    this.seleccionado=empleado;
  }
}
