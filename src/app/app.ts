import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { empleado } from './empleado.model';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoC } from "./empleado-hijo-c/empleado-hijo-c";
import { ListaProductosComponent } from "./lista-productos/lista-productos";
import { ServicioEmpleado } from './servicio-empleado';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, EmpleadoHijoC, ListaProductosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  titulo = "Listado de Empleados";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: empleado[];


  constructor(private miServicio: ServicioEmpleado, private empleadosService: EmpleadosService){
    //this.empleados = this.miServicio.empleados;
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  agregar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario, true);

    //this.empleados.push(miEmpleado);
    //this.miServicio.muestra_mensaje("Empleado agregado con el nombre: " + miEmpleado.nombre);
    this.empleadosService.agregarEmpleado(miEmpleado);
  }
}