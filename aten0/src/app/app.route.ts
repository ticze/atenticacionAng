import {RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MenuComponent} from './components/menu/menu.component';
import{ProtegidaComponent} from './components/protegida/protegida.component';

const APP_ROUTS : Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'menu', component: MenuComponent },
    { path: 'protegida', component: ProtegidaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTS) 