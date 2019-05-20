import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doSomething() {
    this.router.navigate([
      'prova',
      10,         // :param parameter
      'prova',    // :route parameter
      {
        id: 45,
        q: 'ccsacdsacdsacsa'
      }
    ]);
  }

}
