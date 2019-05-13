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
      nome: 'Giacomo Alberini',
      email: 'giacomoalbe@gmail.com',
      stelle: 1,
      color: 'green'
    },
    {
      id: 2,
      nome: 'Luigi',
      email: 'luigi@mail.com',
      stelle: 4,
      attivo: true,
      color: 'lime'
    },
    {
      id: 3,
      nome: 'Leonardo',
      stelle: 3,
      attivo: true,
      color: 'purple'
    },
    {
      id: 4,
      nome: 'Giacomo 2',
      stelle: 3,
      attivo: false,
      color: 'pink'
    },
    {
      id: 5,
      nome: 'GiuseppeSimone',
      stelle: 1,
      color: 'lightblue'
    },
    {
      id: 6,
      nome: 'GiuseppeSimone',
      stelle: 1,
      color: 'lightblue'
    },
    {
      id: 7,
      nome: 'GiuseppeSimone',
      stelle: 1,
      color: 'lightblue'
    }
  ];

  private nextId: number;

  observablesUser: BehaviorSubject<Utente[]> = new BehaviorSubject([...this.utenti]);

  edit_event: Subject<Utente> = new Subject();
  cancel_edit_event: Subject<undefined> = new Subject();

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
