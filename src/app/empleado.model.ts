export class empleado{
    nombre: string = "";
    apellido: string = "";
    cargo: string = "";
    salario: number = 0;
    estado: boolean = true;

    constructor(nombre: string, apellido: string, cargo: string, salario: number, estado: boolean){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
        this.estado = estado;
    }
}