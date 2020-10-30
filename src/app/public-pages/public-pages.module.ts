import { LoginModule } from './login/login.module';
import { PublicPagesComponent } from './public-pages.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

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
<<<<<<< HEAD
        path: 'login',
        component: LoginComponent
      },
      {
=======
>>>>>>> 8752d2781be397da2ed2f0b1feb65ec44e7084bd
        path: 'create-account',
        component: CreateAccountComponent
      },
      {
        path: 'resetpassword',
        component: ResetPasswordComponent
      }
    ]
  }
];

@NgModule({
  declarations: [PublicPagesComponent, CreateAccountComponent, ResetPasswordComponent],
  imports: [
    LoginModule,
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class PublicPagesModule { }
