import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  sampleSubmit: Observable<any>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (this.loginFormGroup.valid) {
      console.log("loggin in")
      // dito papasa yung api
      of(null).pipe(
        delay(1000),
        tap(() => console.log(`Success login for: ${this.loginFormGroup.get('userName').value}`))
      ).subscribe();

    } else {
      console.log(this.loginFormGroup.errors);
    }
  }

}
