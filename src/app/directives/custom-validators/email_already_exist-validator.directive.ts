import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Directive({
  selector: '[emailExist][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useClass: EmailAlreadyExistValidator,
      multi: true
    }
  ]
})
export class EmailAlreadyExistValidator implements AsyncValidator {
  constructor(private userService: UserService) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return emailAlreadyExist(control, this.userService);
  }
}

export function emailAlreadyExist(
  control: AbstractControl,
  userService: UserService
): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 3000);
  });
}
