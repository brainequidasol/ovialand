import { ResetPasswordComponent } from './../reset-password/reset-password.component';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule

    ]
})
export class LoginModule { }