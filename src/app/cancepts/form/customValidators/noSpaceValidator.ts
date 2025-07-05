import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noSpaceValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (value?.includes(' ')) {
    return { noSpacesAllowed: true }; 
  }

  return null; 
}
