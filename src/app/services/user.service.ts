import { Injectable } from '@angular/core';
import { Utente } from '../utente';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private utenti: Array<Utente> = [
    {
      id: 1,
      nome: 'Giacomo',
      cognome: 'Alberini',
      email: 'giacomoalbe@gmail.com',
      rating: 5
    }
  ];

  private nextId: number;

  observablesUser: BehaviorSubject<Utente[]> = new BehaviorSubject([...this.utenti]);

  constructor() {
    this.nextId = this.utenti.reduce((prev, next) => {
      return (prev.id > next.id) ? prev : next;
    }).id;
  }

  getUsers() {
    return this.observablesUser.asObservable();
  }

  add(utente: Utente) {
    this.utenti.push(utente);

    this.observablesUser.next(this.utenti);
  }

  delete(utente: Utente) {
    let userIndex = this.utenti.indexOf(utente);

    this.utenti.splice(userIndex, 1);

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
    this.edit_event.next(utente);
  }
}
