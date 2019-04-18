import { Component } from '@angular/core';

interface Utente {
  nome: string;
  stelle: number;
  color: string;
  attivo?: boolean;
}

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

  style = {
    color: 'red',
    fontSize: 20
  }

  utenti: Array<Utente> = [
    {
      nome: "Giacomo",
      stelle: 1,
      color: "green",
    },
    {
      nome: "Luigi",
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
  ];

  constructor () {
    console.log("Ciao, sono un componente!");

    for (let i=0; i < this.utenti.length; i++) {
      console.log(this.utenti[i]);
    }

    console.log("******************************");

    let i = 0;

    while (i < this.utenti.length) {
      console.log(this.utenti[i]);

      i++;
    }

    console.log("################################");

    this.utenti.forEach((elem, index) => {
      console.log(elem, index);
    });
  }

  changeClickMessage() {
    if (this.clickMessage === "Well done!") {
      this.clickMessage = "Click me!";
    } else {
      this.clickMessage = "Well done!";
    }
  }

  updateCountClick() {
    this.clickCount++;
  }

  braseAll() {
    this.clickCount = 0;
  }

  braseAllForTrue() {
    this.clickCount = -10;
  }
}
