import { Injectable } from '@angular/core';
import { Utente } from '../utente';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
  private utenti: Array<Utente> = [
    {
      id: 1,
      nome: 'Giacomo',
      cognome: 'Alberini',
      email: 'giacomoalbe@gmail.com',
      rating: 5
    }
  ];
   */
  private utenti: Utente[] = [];
  private nextId: number;

  observablesUser: BehaviorSubject<Utente[]> = new BehaviorSubject([...this.utenti]);

  constructor() {
    this.utenti = JSON.parse(localStorage.getItem("utenti")) || [];

    if (this.utenti.length > 0) {
      this.nextId = this.utenti.reduce((prev, next) => {
        return (prev.id > next.id) ? prev : next;
      }).id;
    } else {
      this.nextId = 0;
    }

    this.observablesUser.next(this.utenti);
  }

  getUsers() {
    return this.observablesUser.asObservable();
  }

  get(userId: number): Utente {
    let userToFind: Utente;

    this.utenti.forEach((utente) => {
      if (utente.id == userId) {
        userToFind = JSON.parse(JSON.stringify(utente));
      }
    });

    return userToFind;
  }

  add(utente: Utente) {
    utente.id = ++this.nextId;

    this.utenti.push(utente);

    localStorage.setItem("utenti", JSON.stringify(this.utenti));

    this.observablesUser.next(this.utenti);
  }

  delete(utente: Utente) {
    let userIndex = this.utenti.indexOf(utente);

    this.utenti.splice(userIndex, 1);

    localStorage.setItem("utenti", JSON.stringify(this.utenti));

    this.observablesUser.next(this.utenti);
  }

  save(utente: Utente) {
    // Save the user provided
    this.utenti = this.utenti.map((_utente) => {
      if (_utente.id === utente.id) {
        return utente;
      } else {
        return _utente;
      }
    });

    this.observablesUser.next(this.utenti);
  }

  edit(utente: Utente) {
    let userId = utente.id;
    let editUserIndex = -1;

    this.utenti.forEach((user, index) => {
      if (user.id == utente.id) {
        editUserIndex = index;
      }
    });

    this.utenti[editUserIndex] = JSON.parse(JSON.stringify(utente));

    localStorage.setItem("utenti", JSON.stringify(this.utenti));

    this.observablesUser.next(this.utenti);
  }
}
