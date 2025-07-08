import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator {

  static noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value?.includes(' ')) {
      return { noSpacesAllowed: true };
    }
    return null;
  }

  static passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null {
    const password = formGroup.get('password')?.value;
    const confirm = formGroup.get('confirmPassword')?.value;

    return password === confirm ? null : { passwordMismatch: true };
  };


  static ageRangeValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    // Skip validation if value is null or not a number
    if (value === null || value === undefined || isNaN(value)) {
      return null;
    }

    if (value < 18 || value > 60) {
      return { ageRange: true }; // ❌ invalid
    }

    return null; // ✅ valid
  }

  static postponeRequired(formGroup: AbstractControl): ValidationErrors | null {
    const status = formGroup.get('status')?.value

    if (status === 'postpone') {
      return { postponeRequired: true }; // ❌ invalid
    }
    return null
  }


  static allFieldsRequiredValidator(form: AbstractControl): ValidationErrors | null {
  const controls = (form as any)?.controls;
  if (!controls) return null;

  for (const key in controls) {
    const control = controls[key];
    const value = control?.value;

    // If any control is empty, return an error
    if (value === null || value === undefined || value === '') {
      return { allFieldsRequired: true }; // ❌ invalid
    }
  }

  return null; // ✅ valid
};


}