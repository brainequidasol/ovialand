import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';





// const ELEMENT_DATA: PeriodicElement[];

export interface PeriodicElement {
  username: string;
  firstname: string;
  lastname: string;

};
// const ELEMENT_DATA: PeriodicElement[] = [
//   { username: 'one', firstname: 'Hydrogen', lastname: 'wan', },
//   { username: 'two', firstname: 'Helium', lastname: 'too', },
// ];

const ELEMENT_DATA: PeriodicElement[] = []

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})




export class UserListComponent implements OnInit {

  constructor(private http: HttpClient) { };

  ngOnInit(): void {
    this.http.get("http://localhost:3000/api/getuserlist").subscribe((response) => {
      console.log(response);

      // export interface PeriodicElement {
      //   username: string;
      //   firstname: string;
      //   lastname: string;

      // };
      //   const ELEMENT_DATA: PeriodicElement[] = [
      //     { username: 'one', firstname: 'Hydrogen', lastname: 'wan', },
      //     { username: 'two', firstname: 'Helium', lastname: 'too', },
      //   ];
    });

  }

  displayedColumns: string[] = ['username', 'firstname', 'lastname'];
  dataSource = ELEMENT_DATA;



}


