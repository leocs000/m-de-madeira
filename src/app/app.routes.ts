import { Routes } from '@angular/router';
import { EstadoListComponent } from './components/estado/estado-list/estado-list.component';
import { EstadoFormComponent } from './components/estado/estado-form/estado-form.component';
import { MadeiraListComponent } from './components/madeira/madeira-list/madeira-list.component';
import { estadoResolver } from './components/estado/resolver/estado.resolver';
import { MunicipioListComponent } from './components/municipio/municipio-list/municipio-list.component';
import { MunicipioFormComponent } from './components/municipio/municipio-form/municipio-form.component';
import { municipioResolver } from './components/municipio/resolver/municipio.resolver';

export const routes: Routes = [
  {path: '', redirectTo: '/madeira', pathMatch: 'full'},

  {path: 'estados', component: EstadoListComponent, title: 'Lista de Estados'},
  {path: 'estados/new', component: EstadoFormComponent, title: 'Novo Estado'},
  {path: 'estados/edit/:id', component: EstadoFormComponent, resolve: {estado: estadoResolver}},

  {path: 'municipios', component: MunicipioListComponent, title: 'Lista de municipios'},
  {path: 'municipios/new', component: MunicipioFormComponent, title: 'Novo municipio'},
  {path: 'municipios/edit/:id', component: MunicipioFormComponent, resolve: {municipio: municipioResolver}},

  {path: 'madeira', component: MadeiraListComponent, title: 'Lista de produtos'},
];
