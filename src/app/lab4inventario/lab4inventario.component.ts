import { Component } from '@angular/core';
import { CalculadoraImpuestosService } from './calculadora-impuestos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lab4inventario',
  imports: [FormsModule],
  templateUrl: './lab4inventario.component.html',
  styleUrls: ['./lab4inventario.component.css']
})
export class Lab4InventarioComponent {
  nombreProducto: string = '';
  precioBase: number = 0;
  categoria: string = '';

  constructor(private calculadoraImpuestosService: CalculadoraImpuestosService) {}

  calcularImpuestos() {
    // Validación de que todos los campos estén llenos
    if (!this.nombreProducto || !this.precioBase || !this.categoria) {
      alert('Por favor, complete todos los campos del formulario antes de calcular.');
      return;
    }

    const resultado = this.calculadoraImpuestosService.calcular(this.precioBase, this.categoria);
    alert(`Detalle del Producto\n` +
          `Nombre del Producto: ${this.nombreProducto}\n` +
          `Categoría Aplicada: ${this.categoria}\n` +
          `Precio Base: $${this.precioBase.toFixed(2)}\n` +
          `Desglose de Costos\n` +
          `Tasa de IVA Aplicada: ${resultado.tasaIVA}%\n` +
          `Monto Total del IVA: $${resultado.montoIVA.toFixed(2)}\n` +
          `Precio Final (Total a Pagar): $${resultado.precioFinal.toFixed(2)}`);

    // Limpiar los campos del formulario
    this.nombreProducto = '';
    this.precioBase = 0;
    this.categoria = '';
  }
}
