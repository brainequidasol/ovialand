import { PublicPagesComponent } from './public-pages/public-pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'public',
    loadChildren: () => import('./public-pages/public-pages.module').then(m => m.PublicPagesModule)
  },
  {
    path: "**",
    redirectTo: 'public'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
