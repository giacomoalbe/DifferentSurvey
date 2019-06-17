import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserComponent } from './user/user.component';
import { ValidatorModule } from './directives/validator.module';
import { ProvaComponent } from './components/prova/prova.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { RouterOutletComponent } from './components/router-outlet/router-outlet.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { LengthPipe } from './pipes/length.pipe';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CounterComponent } from './components/counter/counter.component';
import { Counter2Component } from './components/counter2/counter2.component';
import { FlagComponent } from './components/flag/flag.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProvaComponent,
    UserListComponent,
    NotFoundComponent,
    UserViewComponent,
    UserEditComponent,
    RouterOutletComponent,
    SearchMovieComponent,
    MovieDetailComponent,
    LengthPipe,
    StarRatingComponent,
    CounterComponent,
    Counter2Component,
    FlagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ValidatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
