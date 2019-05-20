import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { ProvaComponent } from './components/prova/prova.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'utenti',
    component: UserListComponent,
  },
  {
    path: 'prova/:param/:route',
    component: ProvaComponent,
  },
  {
    path: '',
    redirectTo: 'prova',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
