import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivatePagesComponent } from './private-pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PrivatePagesComponent,

    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [PrivatePagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardModule

  ]
})
export class PrivatePagesModule { }
