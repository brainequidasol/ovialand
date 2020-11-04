import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  sampleSubmit: Observable<any>;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (this.loginFormGroup.valid) {

      // console.log("loggin in")
      let x = {
        userName: this.loginFormGroup.get('userName').value,
        password: this.loginFormGroup.get('password').value
      };
      this.http.post('http://localhost:3000/api/posts', x).subscribe((response) => {
        console.log(response);
        if (response == false) {
          // alert("wrong account");

        }

      })



    } else {
      console.log(this.loginFormGroup.errors);

    }
  }

}
