import { Component } from '@angular/core';

import { Utente } from './utente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DifferentSurvey';
  nome = "Giacomo";
  clickMessage: string = "Click me!";
  clickCount: number = 0;
  nomeUtente: string;

  angularMin: number = 1;
  angularMax: number = 5;

  model: Utente = {
    nome: "Alfonso",
  };

  style = {
    color: 'red',
    fontSize: 20
  }

  utenti: Array<Utente> = [
    {
      nome: "Giacomo Alberini",
      email: "giacomoalbe@gmail.com",
      stelle: 1,
      color: "green",
    },
    {
      nome: "Luigi",
      email: "luigi@mail.com",
      stelle: 4,
      attivo: true,
      color: "lime",
    },
    {
      nome: "Leonardo",
      stelle: 3,
      attivo: true,
      color: "purple",
    },
    {
      nome: "Giacomo 2",
      stelle: 3,
      attivo: false,
      color: "pink",
    },
    {
      nome: "GiuseppeSimone",
      stelle: 1,
      color: "lightblue",
    },
    {
      nome: "GiuseppeSimone",
      stelle: 1,
      color: "lightblue",
    },
    {
      nome: "GiuseppeSimone",
      stelle: 1,
      color: "lightblue",
    },
  ];

  onSubmit() {
    console.log("Nuovo utente: ", this.model);
    this.utenti.push(this.model);
  }

  constructor () {
  }
}
