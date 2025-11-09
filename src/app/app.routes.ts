import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ProyectosComponent } from './proyectos-component/proyectos-component';
import { QuienesComponent } from './quienes-component/quienes-component';
import { ErrorPersonalizado } from './error-personalizado/error-personalizado';
import { RepasoInicio } from './repaso-inicio/repaso-inicio';
import { Repaso1 } from './repaso1/repaso1';
import { Repaso2 } from './repaso2/repaso2';
import { Repaso3 } from './repaso3/repaso3';


export const routes: Routes = [
    {path: "", component: RepasoInicio},
    {path: "repaso1", component: Repaso1},
    {path: "repaso2", component: Repaso2},
    {path: "repaso3",  component: Repaso3},
    //{path: "actualiza/:id", component: ActualizaComponent},
    {path: "**", component: ErrorPersonalizado},

    //{path: "parcial2", component: HomeComponent},
    //{path: "parcial2.1", component: Parcial21},
    //{path: "parcial2.2/", component: Parcial22},
    //{path: "parcial2.3/:dato", component: Parcial23},
    //{path: "**", component: ErroresPersonalizados},

];