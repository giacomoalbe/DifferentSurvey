import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmailAlreadyExistValidator } from './custom-validators/email_already_exist-validator.directive';
import { FiscalCodeValidatorDirective } from './custom-validators/fiscal_code-validator.directive';
import { IbanValidatorsDirective } from './custom-validators/iban-validator.directive';

@NgModule({
  declarations: [EmailAlreadyExistValidator, FiscalCodeValidatorDirective, IbanValidatorsDirective],
  imports: [FormsModule],
  exports: [EmailAlreadyExistValidator, FiscalCodeValidatorDirective, IbanValidatorsDirective],
  providers: [],
  bootstrap: []
})
export class ValidatorModule {}
