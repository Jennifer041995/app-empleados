import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleado } from '../servicio-empleado';

@Component({
  selector: 'app-caracteristicas-empleados-c',
  imports: [],
  templateUrl: './caracteristicas-empleados-c.html',
  styleUrl: './caracteristicas-empleados-c.css'
})
export class CaracteristicasEmpleadosC {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() CaracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleado){}

  agregar_caracteristica(value: string) {
    this.CaracteristicasEmpleados.emit(value);
    this.miServicio.muestra_mensaje("Característica agregada: " + value);
  }
}
