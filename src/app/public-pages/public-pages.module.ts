import { CreateAccountModule } from './create-account/create-account.module';
import { LoginModule } from './login/login.module';
import { PublicPagesComponent } from './public-pages.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PublicPagesComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'create-account',
        component: CreateAccountComponent
      },
      {
        path: 'resetpassword',
        component: ResetPasswordComponent
      },
      {
        path: 'publicdashboard',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  declarations: [PublicPagesComponent, ResetPasswordComponent, DashboardComponent],
  imports: [
    LoginModule,
    RouterModule.forChild(routes),
    CommonModule,
    CreateAccountModule
  ]
})
export class PublicPagesModule { }
