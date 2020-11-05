import { UserListModule } from './user-list/user-list.module';
import { UserListComponent } from './user-list/user-list.component';
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
      },
      {
        path: 'userlist',
        component: UserListComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [PrivatePagesComponent, UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardModule,
    UserListModule
  ]
})
export class PrivatePagesModule { }
