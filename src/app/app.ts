import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { empleado } from './empleado.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Listado de Empleados";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  estado: boolean = true;

  empleados: empleado[] = [
    new empleado("Josue", "Mejia", "Jefe", 99999.99, true),
    new empleado("Jared", "Garay", "Director", 1000, false),
    new empleado("Juan", "Pérez", "Administrativo", 800, true),
    new empleado("Maria", "Sorto", "Colaboradora", 500, true )
  ];
i: any;
empleado: any;
fontWeight: any;

  agregar_empleado(){
    let miEmpleado = new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario, this.estado);

    this.empleados.push(miEmpleado);
  }
}