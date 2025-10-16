import { Component } from '@angular/core';
/*import { FormsModule } from '@angular/forms';*/
import { RouterOutlet } from '@angular/router';
import { Lab4InventarioComponent } from "./lab4inventario/lab4inventario.component";
/*import { empleado } from './empleado.model';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoC } from "./empleado-hijo-c/empleado-hijo-c";
import { ServicioEmpleado } from './servicio-empleado';
import { empleadosService } from './empleados.service';*/

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Lab4InventarioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  
}