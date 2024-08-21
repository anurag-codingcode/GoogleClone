import { AbstractControl, ValidationErrors } from '@angular/forms';

export function notFoundValidator(control: AbstractControl): ValidationErrors | null {
  return control.hasError('notfound') ? { notfound: true } : null;
}
