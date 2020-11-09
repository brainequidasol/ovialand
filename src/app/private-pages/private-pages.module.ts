import { SalesPageLeadsModule } from './sales-page-leads/sales-page-leads.module';
import { SalesPageModule } from './sales-page/sales-page.module';
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
import { ClientPageComponent } from './client-page/client-page.component';
import { SalesPageComponent } from './sales-page/sales-page.component';
import { AccountManagerPageComponent } from './account-manager-page/account-manager-page.component';
import { AdminCreateAccountComponent } from './admin-create-account/admin-create-account.component';
import { SalesPageLeadsComponent } from './sales-page-leads/sales-page-leads.component';

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
      },
      {
        path: 'client-page',
        component: ClientPageComponent,
      },
      {
        path: 'sales-page',
        component: SalesPageComponent,
      },
      {
        path: 'sales-page-leads',
        component: SalesPageLeadsComponent,
      }, {
        path: 'account-manager-page',
        component: AccountManagerPageComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [PrivatePagesComponent, UserListComponent, MessagesComponent, LeadsComponent, ReportsComponent, ActivityLogComponent, ClientPageComponent, AccountManagerPageComponent, AdminCreateAccountComponent, SalesPageLeadsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardModule,
    UserListModule,
    SalesPageModule,
    SalesPageLeadsModule
  ]
})
export class PrivatePagesModule { }
