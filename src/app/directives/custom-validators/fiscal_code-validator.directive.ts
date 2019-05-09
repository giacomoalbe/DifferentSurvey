import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, ValidatorFn, Validator } from '@angular/forms';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[fiscalCode]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: FiscalCodeValidatorDirective,
      multi: true
    }
  ]
})
export class FiscalCodeValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return fiscalCodeValidation(control);
  }
}

export const fiscalCodeValidation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  return (control: AbstractControl) => {
    let value = control.value as string;
    if (!value) {
      return null;
    }
    return value.length > 2 ? { key: true } : null;
  };
};
