import { Injectable } from '@angular/core';
import { Utente } from '../utente';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  utenti: Array<Utente> = [
    {
      nome: 'Giacomo Alberini',
      email: 'giacomoalbe@gmail.com',
      stelle: 1,
      color: 'green'
    },
    {
      nome: 'Luigi',
      email: 'luigi@mail.com',
      stelle: 4,
      attivo: true,
      color: 'lime'
    },
    {
      nome: 'Leonardo',
      stelle: 3,
      attivo: true,
      color: 'purple'
    },
    {
      nome: 'Giacomo 2',
      stelle: 3,
      attivo: false,
      color: 'pink'
    },
    {
      nome: 'GiuseppeSimone',
      stelle: 1,
      color: 'lightblue'
    },
    {
      nome: 'GiuseppeSimone',
      stelle: 1,
      color: 'lightblue'
    },
    {
      nome: 'GiuseppeSimone',
      stelle: 1,
      color: 'lightblue'
    }
  ];

  observablesUser: BehaviorSubject<Utente[]> = new BehaviorSubject([...this.utenti]);

  edit_event: Subject<Utente> = new Subject();
  edit_event$ = this.edit_event.asObservable();


  constructor() {}

  getUsers() {
    return this.utenti;
  }

  addUser(utente: Utente) {
    this.utenti.push(utente);
    this.observablesUser.next(this.utenti);
  }

  getObservablesUsers(): Observable<Utente[]> {
    return this.observablesUser.asObservable();
  }

  checkEmail(email: string) {}
}
