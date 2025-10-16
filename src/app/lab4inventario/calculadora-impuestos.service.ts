import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraImpuestosService {
  calcular(precioBase: number, categoria: string) {
    let tasaIVA = 0; 

    switch (categoria) {
      case 'electrónica':
        tasaIVA = 13;
        break;
      case 'alimentos':
        tasaIVA = 5;
        break;
      case 'libros':
        tasaIVA = 0;
        //break;
      //default:
        //alert('Categoría no válida. Por favor, seleccione una categoría correcta.');
            // Lanza manualmente una excepción cuando ocurre una condición excepcional en el código
       // throw new Error('Categoría no válida');
    }

    const montoIVA = (precioBase * tasaIVA) / 100;
    const precioFinal = precioBase + montoIVA;

    return { tasaIVA, montoIVA, precioFinal };
  }
}
