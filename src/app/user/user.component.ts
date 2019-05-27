import { Component, OnInit, Input } from '@angular/core';

import { Utente } from '../utente';
import { LoggerService } from '../services/logger.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() utente: Utente;

  editable = true;

  constructor(
    private logger: LoggerService,
    private userService: UserService
  ) {
  }

  ngOnInit() {}

  editUser() {
    this.userService.edit(this.utente);
  }
}
