import { Routes } from '@angular/router';
import { EstadoListComponent } from './components/estado/estado-list/estado-list.component';
import { EstadoFormComponent } from './components/estado/estado-form/estado-form.component';
import { MadeiraListComponent } from './components/madeira/madeira-list/madeira-list.component';
import { estadoResolver } from './components/estado/resolver/estado.resolver';

export const routes: Routes = [
  {path: '', redirectTo: '/madeira', pathMatch: 'full'},
  {path: 'estados', component: EstadoListComponent, title: 'Lista de Estados'},
  {path: 'estados/new', component: EstadoFormComponent, title: 'Novo Estado'},
  {path: 'estados/edit/:id', component: EstadoFormComponent, resolve: {estado: estadoResolver}},
  {path: 'madeira', component: MadeiraListComponent, title: 'Lista de produtos'},
];
