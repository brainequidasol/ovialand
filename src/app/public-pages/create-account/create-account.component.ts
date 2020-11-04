import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  createAccountFormGroup: FormGroup
  sampleSubmit: Observable<any>;

  constructor(private fb: FormBuilder, private http: HttpClient) { }


  ngOnInit(): void {
    this.createAccountFormGroup = this.fb.group({
      userName: [''],
      password: [''],
      firstName: [''],
      lastName: [''],
    })

  }
  submitForm() {

    if (this.createAccountFormGroup.valid) {
      let x = {
        userName: this.createAccountFormGroup.get('userName').value,
        password: this.createAccountFormGroup.get('password').value,
        firstName: this.createAccountFormGroup.get('firstName').value,
        lastName: this.createAccountFormGroup.get('lastName').value
      };
      this.http.post('http://localhost:3000/api/createaccont', x).subscribe((response) => {
        // console.log(response);
      })
      console.log(x);


    } else {
      console.log(this.createAccountFormGroup.errors);
    }
  }
}
