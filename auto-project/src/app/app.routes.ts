import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { CarrosdetailComponent } from './components/carros/carrosdetail/carrosdetail.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { MarcaslistComponent } from './components/marcas/marcaslist/marcaslist.component';
import { MarcasdetailsComponent } from './components/marcas/marcasdetails/marcasdetails.component';


export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "admin", component: PrincipalComponent, children: [
        {path: "carros", component: CarroslistComponent},
        {path: "carros/new", component: CarrosdetailComponent},
        {path: "carros/edit/:id", component: CarrosdetailComponent},

        {path: "marcas", component: MarcaslistComponent},
        {path: "marcas/new", component: MarcasdetailsComponent},
        {path: "marcas/edit/:id", component: MarcasdetailsComponent}
    ]}
];
