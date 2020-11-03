import { DashboardComponent } from './dashboard.component';
import { HtmlAstPath } from '@angular/compiler';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class DashboardModule {
}
