import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-sales-page-leads',
  templateUrl: './sales-page-leads.component.html',
  styleUrls: ['./sales-page-leads.component.css']
})
export class SalesPageLeadsComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'email', 'gender', 'unit1', 'unit2'];

  constructor(private http: HttpClient) { };
  ngOnInit(): void {
    this.http.get("http://localhost:3000/api/getsalesleads").subscribe((response) => {
      this.dataSource = response;


    });

  }

}
