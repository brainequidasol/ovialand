import { DashboardComponent } from './../public-pages/dashboard/dashboard.component';
import { LoginComponent } from './../public-pages/login/login.component';
import { LoginModule } from './../public-pages/login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})

export class AuthModule { }
