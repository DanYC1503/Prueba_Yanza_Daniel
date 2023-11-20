import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListarComponent } from './pages/listar/listar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { EditarComponent } from './pages/editar/editar.component';

const routes: Routes = [
  {path:"pages/inicio", component: InicioComponent},
  {path:"pages/listar", component: ListarComponent},
  {path:"pages/editar", component: EditarComponent},
  {path:"pages/crear", component: CrearComponent},
  {path:"pages/delete", component: DeleteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
