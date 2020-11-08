import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListComponent } from './property-list.component';



@NgModule({
  declarations: [PropertyListComponent],
  imports: [
    CommonModule,
    RouterModule,

  ]
})
export class PropertyListModule { }
