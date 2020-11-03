import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'
=======
import { UserListComponent } from './private-pages/user-list/user-list.component';
import { DashboardComponent } from './private-pages/dashboard/dashboard.component';

>>>>>>> 570ca2cab8d3b041900cbcaeb05268c6dbaf7088
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
