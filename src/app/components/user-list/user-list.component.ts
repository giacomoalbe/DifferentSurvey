import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { Utente } from '../../utente';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  utenti: Utente[];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  add() {
    this.router.navigate(['utenti/add']);
  }

  edit(utente: Utente) {
    console.log("Edit");
    console.log(utente);
    this.router.navigate(['utenti/edit/', utente.id]);
  }

  delete(utente: Utente) {
    if (confirm("Vuoi davvero cancellare l'utente?")) {
      console.log("delete");
      this.userService.delete(utente);
    }
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe((utenti) => {
        this.utenti = utenti;
      });
  }
}
