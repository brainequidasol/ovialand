import { DashboardModule } from './dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { PrivatePagesComponent } from './private-pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'private',
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
