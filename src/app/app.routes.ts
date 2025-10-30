import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ProyectosComponent } from './proyectos-component/proyectos-component';
import { QuienesComponent } from './quienes-component/quienes-component';
import { ContactoComponent } from './contacto-component/contacto-component';
import { ActualizaComponent } from './actualiza-component/actualiza-component';
import { ErrorPersonalizado } from './error-personalizado/error-personalizado';
//import { Parcial2 } from './parcial2/parcial2';
//import { Parcial22 } from './parcial2.2/parcial2.2';
//import { Parcial21 } from './parcial2.1/parcial2.1';
//import { Parcial23 } from './parcial2.3/parcial2.3';
//import { ErroresPersonalizados } from './errores-personalizados/errores-personalizados';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "proyectos", component: ProyectosComponent},
    {path: "quienes", component: QuienesComponent},
    {path: "contacto",  component: ContactoComponent},
    {path: "actualiza/:id", component: ActualizaComponent},
    {path: "**", component: ErrorPersonalizado},

    //{path: "parcial2", component: HomeComponent},
    //{path: "parcial2.1", component: Parcial21},
    //{path: "parcial2.2/", component: Parcial22},
    //{path: "parcial2.3/:dato", component: Parcial23},
    //{path: "**", component: ErroresPersonalizados},

];