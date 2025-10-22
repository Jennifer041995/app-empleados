import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { empleado } from '../empleado.model';
import { CaracteristicasEmpleadosC } from "../caracteristicas-empleados-c/caracteristicas-empleados-c";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empleado-hijo-c',
  imports: [CommonModule, CaracteristicasEmpleadosC, RouterModule],
  templateUrl: './empleado-hijo-c.html',
  styleUrl: './empleado-hijo-c.css'
})
export class EmpleadoHijoC {
  @Input() empleadoLista: empleado;
  @Input() indice: number;
  array_caracteristicas = [''];

  agregar_caracteristica(carecteristica: string){
    this.array_caracteristicas.push(carecteristica);
  }
  
}