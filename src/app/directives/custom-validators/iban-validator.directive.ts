import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, ValidatorFn, NG_VALIDATORS, AsyncValidator } from '@angular/forms';

@Directive({
  selector: '[ibanValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: IbanValidatorsDirective,
      multi: true
    }
  ]
})
export class IbanValidatorsDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return IbanValidate()(control);
  }
}

export function IbanValidate() : ValidatorFn {
    return(control: AbstractControl) : ValidationErrors | null => {
      let valueToCheck = control.value as string;
      return valueToCheck.length === 7 ? null : { key: 'string'}
    }
}
