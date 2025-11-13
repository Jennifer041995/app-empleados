import { HttpClient } from "@angular/common/http";
import { empleado } from "./empleado.model";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";

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
            },
            error => console.log("Error al guardar empleados: " + error)
        );
    }

    cargar_empleados() {
        return this.httpClient.get('https://misempleados25-default-rtdb.firebaseio.com/datos.json');
    }

    //si le pongo dos le estoy diciendo que devuelva algo que es de tipo empleado
    actualizar_empleado(indice: number, empleado: empleado): Promise<any> {
        let url = 'https://misempleados25-default-rtdb.firebaseio.com/datos/' + indice + '.json';
        const observable = this.httpClient.put(url, empleado);
        return lastValueFrom(observable);
        //this.httpClient.put(url, empleado).subscribe(
        //    response => console.log("Se ha actualizado el empleado: " + response),
        //    error => console.log("Error al actualizar empleado: " + error)
        //);
}

    eliminar_empleado(indice: number) {
        let url = 'https://misempleados25-default-rtdb.firebaseio.com/datos/' + indice + '.json';
        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado el empleado: " + response),
            error => console.log("Error al eliminar empleado: " + error)
        );
    }

}

