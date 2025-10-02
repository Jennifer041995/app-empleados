import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleados-c',
  imports: [],
  templateUrl: './caracteristicas-empleados-c.html',
  styleUrl: './caracteristicas-empleados-c.css'
})
export class CaracteristicasEmpleadosC {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() CaracteristicasEmpleados = new EventEmitter<string>();

  agregar_caracteristica(value: string) {
    this.CaracteristicasEmpleados.emit(value);
  }
}
