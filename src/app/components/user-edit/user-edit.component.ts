import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Utente } from '../../utente';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  isEdit = false;

  editUser: Utente = {
    nome: "",
    cognome: "",
    email: "",
    rating: 0
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    const userId = parseInt(this.route.snapshot.paramMap.get('user_id')) || null;

    this.isEdit = userId != null;

    if (this.isEdit) {
      this.editUser = this.userService.get(userId);
    }
  }

  createUser(form) {
    if (form.valid) {
      if (this.isEdit) {
        // Modifico utente
        this.userService.edit(this.editUser);
      } else {
        // Creo utente
        this.userService.add(this.editUser);
      }

      this.router.navigate(['/utenti/list']);
    } else {
      console.log("Non mi freghi");
    }
  }

  goBack() {
    this.router.navigate(['utenti/list']);
  }

}
