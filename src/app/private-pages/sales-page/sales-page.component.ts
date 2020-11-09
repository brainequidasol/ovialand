import { RouterModule, Router } from '@angular/router';
import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.css']
})
export class SalesPageComponent implements OnInit {
  admincreateAccountFormGroup: FormGroup;
  sampleSubmit: Observable<any>;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }


  ngOnInit(): void {

    this.admincreateAccountFormGroup = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      address: [''],
      gender: [''],
      unit1: [''],
      unit2: [''],

    })
  }

  submitForm() {

    if (this.admincreateAccountFormGroup.valid) {
      let x = {
        firstName: this.admincreateAccountFormGroup.get('firstName').value,
        lastName: this.admincreateAccountFormGroup.get('lastName').value,
        email: this.admincreateAccountFormGroup.get('email').value,
        address: this.admincreateAccountFormGroup.get('address').value,
        gender: this.admincreateAccountFormGroup.get('gender').value,
        unit1: this.admincreateAccountFormGroup.get('unit1').value,
        unit2: this.admincreateAccountFormGroup.get('unit2').value,
      };
      this.http.post('http://localhost:3000/api/createsaleslead', x).subscribe((response) => {
        // console.log(response);
        if (response = true) {
          this.router.navigate(["/private/sales-page"]);
        }
      })
      console.log(x);
      alert("Lead Created");

    } else {
      console.log(this.admincreateAccountFormGroup.errors);
    }
  }
}


