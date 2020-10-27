import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountFormGroup: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
}
