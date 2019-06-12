import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minCharLengthValidator(c: char, count: number) : ValidatorFn {
  return (control: AbstractControl) : { [key: string] : any } => {
    const charLength = control.value.split(c).length - 1;
    const valid = charLength >= count;

    if (valid) {
      return null;
    } else {
      return {
        "notEnoughChar": {
          "char": "a",
          actual: charLength,
          count: count
        }
      }
    }

  };
}
