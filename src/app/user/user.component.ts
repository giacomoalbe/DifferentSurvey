import { Component, OnInit, Input } from '@angular/core';

import { Utente } from '../utente';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() utente: Utente;

  constructor() { }

  ngOnInit() {
  }

}
