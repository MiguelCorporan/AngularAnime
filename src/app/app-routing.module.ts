import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { FavoritesComponent } from './Pages/favorites/favorites.component';
import { BusquedasComponent } from './Pages/busquedas/busquedas.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    title: 'Inicio-Janime',
    component: HomeComponent
  },
  {
    path: 'favoritos',
    title: 'Favoritos-Janime',
    component: FavoritesComponent
  },
  {
    path: 'busqueda',
    title: 'Busquedas-Janime',
    component: BusquedasComponent
  },
  {
    path: 'detalle/:id',
    title: 'productos-Tu tienda',
    component: DetalleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
