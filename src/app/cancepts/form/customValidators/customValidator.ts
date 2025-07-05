import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator {

 static noSpaceValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (value?.includes(' ')) {
    return { noSpacesAllowed: true }; 
  }

  return null; 
}

static passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null  {
  const password = formGroup.get('password')?.value;
  const confirm = formGroup.get('confirmPassword')?.value;

  return password === confirm ? null : { passwordMismatch: true };
};


static ageRangeValidator(control: AbstractControl): ValidationErrors | null  {
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

static postphoneRequired(formGroup:AbstractControl):ValidationErrors|null{
const status = formGroup.get('status')?.value

    return null
}


}