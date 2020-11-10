import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})




export class UserListComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName', 'role', 'dateCreated', 'Actions'];

  constructor(private http: HttpClient) { };
  ngOnInit(): void {
    this.http.get("http://localhost:3000/api/getuserlist").subscribe((response) => {
      this.dataSource = response;


    });

  }





}


