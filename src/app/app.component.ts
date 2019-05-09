import { Component, OnInit } from '@angular/core';

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
  clickMessage: string = 'Click me!';
  clickCount: number = 0;
  nomeUtente: string;

  angularMin: number = 1;
  angularMax: number = 5;

  model: Utente = {
    nome: 'Alfonso'
  };

  style = {
    color: 'red',
    fontSize: 20
  };

  utenti: Utente[];

  onSubmit() {
    this.logger.log('Nuovo utente: ' + this.model);
    this.userService.addUser(this.model);
  }

  constructor(private logger: LoggerService, private userService: UserService) {}

  ngOnInit() {
    this.syncFunct();
    this.asyncFunct();
    this.listenToEditUserEvent();
  }

  listenToEditUserEvent() {
    this.userService.edit_event$.subscribe((utente) => {
      this.model = utente;
    });
  }

  syncFunct() {
    console.log(1);
    console.log(2);
    console.log(3);
  }

  asyncFunct() {
    console.log(11);
    setTimeout(() => {
      console.log(22);
    }, 3000);
    console.log(33);

    this.promiseFunction()
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      });
  }

  promiseFunction(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (true) {
          reject(null);
        }
        resolve(null);
      }, 3000);
    });
  }
}
