import { Injectable } from "@angular/core";
import { empleado } from "./empleado.model";
import { ServicioEmpleado } from "./servicio-empleado";

@Injectable({
    providedIn: 'root'
})

export class EmpleadosService {
    empleados: empleado[] = [
        new empleado("Josue", "Mejia", "Jefe", 99999.99, true),
        new empleado("Jared", "Garay", "Director", 1000, false),
        new empleado("Juan", "Pérez", "Administrativo", 800, true),
        new empleado("Maria", "Sorto", "Colaboradora", 500, false)
      ];

      constructor(private servicioMensaje: ServicioEmpleado){}
      
      agregarEmpleado(empleado: empleado) {
        this.empleados.push(empleado);
        this.servicioMensaje.muestra_mensaje("nombre: " + empleado.nombre + " Apellido: " + empleado.apellido);
      }
}