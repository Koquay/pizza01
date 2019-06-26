import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {breadcrumb: 'Home'}
  },
  {
    path: 'customize',
    loadChildren: './customize/customize.module#CustomizeModule'
  },
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path: 'pizza',
    loadChildren: './pizza/pizza.module#PizzaModule'
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
