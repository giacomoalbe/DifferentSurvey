import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserComponent } from './user/user.component';

import { IbanValidatorsDirective } from './directives/custom-validators/iban-validator.directive';
import { FiscalCodeValidatorDirective } from './directives/custom-validators/fiscal_code-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    IbanValidatorsDirective,
    FiscalCodeValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
