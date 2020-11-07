import { PrivatePagesComponent } from './../private-pages.component';
import { HtmlAstPath } from '@angular/compiler';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class DashboardModule { }
