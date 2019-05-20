import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserComponent } from './user/user.component';
import { ValidatorModule } from './directives/validator.module';
import { ProvaComponent } from './components/prova/prova.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProvaComponent,
    UserListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
