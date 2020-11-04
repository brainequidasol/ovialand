import { PublicPagesComponent } from './public-pages/public-pages.component';
import { PrivatePagesComponent } from './private-pages/private-pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'private',
    loadChildren: () => import('./private-pages/private-pages.module').then(m => m.PrivatePagesModule)
  },
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
