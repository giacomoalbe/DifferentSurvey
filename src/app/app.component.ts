import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Utente } from './utente';
import { LoggerService } from './services/logger.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DifferentSurvey';
  nome = 'Giacomo';
  clickMessage = 'Click me!';
  clickCount = 0;
  nomeUtente: string;
  isEdit = false;
  saveUserText = 'Crea';

  angularMin = 1;
  angularMax = 5;

  model: Utente = {};

  utenti: Utente[];

  constructor(
    private logger: LoggerService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.listenToEditUserEvent();
  }

  onSubmit(form: NgForm) {
    if (this.isEdit) {
      this.userService.save(this.model);

      this.cancelEdit();
    } else {
      this.userService.add(this.model);
    }

    form.reset();
  }

  listenToEditUserEvent() {
    this.userService.edit_event.subscribe((utente) => {
      this.isEdit = true;
      this.saveUserText = 'Salva';

      this.model = JSON.parse(JSON.stringify(utente));
    });
  }

  cancelEdit() {
    this.isEdit = false;
    this.model = {};

    this.userService.cancel_edit_event.next();
  }
}
