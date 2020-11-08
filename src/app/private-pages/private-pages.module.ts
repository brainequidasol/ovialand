import { UserListModule } from './user-list/user-list.module';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivatePagesComponent } from './private-pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { MessagesComponent } from './messages/messages.component';
import { LeadsComponent } from './leads/leads.component';
import { ReportsComponent } from './reports/reports.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';

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
      },
      {
        path: 'property-list',
        component: PropertyListComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'leads',
        component: LeadsComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'activity-log',
        component: ActivityLogComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [PrivatePagesComponent, UserListComponent, MessagesComponent, LeadsComponent, ReportsComponent, ActivityLogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardModule,
    UserListModule
  ]
})
export class PrivatePagesModule { }
