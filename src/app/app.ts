import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { empleado } from './empleado.model';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoC } from "./empleado-hijo-c/empleado-hijo-c";
import { ListaProductosComponent } from "./lista-productos/lista-productos";

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, EmpleadoHijoC, ListaProductosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Listado de Empleados";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: empleado[] = [
    new empleado("Josue", "Mejia", "Jefe", 99999.99, true),
    new empleado("Jared", "Garay", "Director", 1000, false),
    new empleado("Juan", "Pérez", "Administrativo", 800, true),
    new empleado("Maria", "Sorto", "Colaboradora", 500, false)
  ];

  agregar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario, true);

    this.empleados.push(miEmpleado);
  }
}