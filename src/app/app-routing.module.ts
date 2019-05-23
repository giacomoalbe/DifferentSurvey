import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvaComponent } from './components/prova/prova.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { RouterOutletComponent } from './components/router-outlet/router-outlet.component';

import { UserViewComponent } from './components/user-view/user-view.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'utenti',
    component: RouterOutletComponent,
    children: [
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: 'edit/:user_id',
        component: UserEditComponent
      },
      {
        path: 'view/:user_id',
        component: UserViewComponent
      },
      {
        path: 'add',
        component: UserEditComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'prova/:param/:route',
    component: ProvaComponent,
  },
  {
    path: '',
    redirectTo: 'prova/10/10',
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
