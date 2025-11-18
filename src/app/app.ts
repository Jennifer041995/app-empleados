import { Component, OnInit } from '@angular/core';
/*import { FormsModule } from '@angular/forms';*/
import { RouterOutlet } from '@angular/router';
import firebase from 'firebase/compat/app';
//import { Lab4InventarioComponent } from "./lab4inventario/lab4inventario.component";

/*import { empleado } from './empleado.model';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoC } from "./empleado-hijo-c/empleado-hijo-c";
import { ServicioEmpleado } from './servicio-empleado';
import { empleadosService } from './empleados.service';*/

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyD_WRR2vXV45bWdXE8E9h6WYMndXVoTdEs",
      authDomain: "misempleados25.firebaseapp.com",
    })
  }
}