import { HttpClient } from "@angular/common/http";
import { empleado } from "./empleado.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'  
})

export class DataServices {
    constructor(private httpClient: HttpClient) {  }

    //datos - es el nombre que se le da a la coleccion en firebase
    guardar_empleado(empleados: empleado []) {
        this.httpClient.post('https://misempleados25-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response => {
                console.log("Se han guardado los empleados: " + response);
            (error: string) => console.log("Error al guardar empleados: " + error);
            }
        );
    }

    cargar_empleados() {
        return this.httpClient.get('https://misempleados25-default-rtdb.firebaseio.com/datos.json');
    }
}


