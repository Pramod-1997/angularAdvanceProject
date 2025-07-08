import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { noSpaceValidator } from '../customValidators/noSpaceValidator';
import { CustomValidator } from '../customValidators/customValidator';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.scss'
})
export class ValidationComponent {

  userProfile: FormGroup;

  constructor(private fb: FormBuilder) {

    this.userProfile = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      firstName: [null, [Validators.required, noSpaceValidator]],
      secondName: [null, [Validators.required, CustomValidator.noSpaceValidator]],
      // employee:[null,[Validators.required]],
      income: [null],
      age: [null, [Validators.required, CustomValidator.ageRangeValidator]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      status: ['', Validators.required],
      postponeDate: [''] // we don't make it required here
    }, {
      //  validators: CustomValidator.passwordMatchValidator, //single customer validator
      validators: [  // group custom validator or  cross-validation
        CustomValidator.passwordMatchValidator,
        CustomValidator.postponeRequired
      ]

    }
    )

  }

  //getter method to access properties
  get f() {
    return this.userProfile.controls;
  }

  profileSubmit() {
    console.log(this.userProfile.value);
    console.log("valid", this.userProfile.valid);
  }

  addValidation() {
    console.log("add validation");
    this.f['income'].setValidators([Validators.required])
    this.f['income'].updateValueAndValidity()
  }

  removeValidation() {
    console.log("remove validation");
    this.f['income'].clearValidators()
    this.f['income'].updateValueAndValidity()
  }

}
