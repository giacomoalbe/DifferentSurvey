import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot);
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.queryParams);
  }

  navigateSomewhere() {
    console.log('Vado da qualche parte');

    this.router.navigate(['/utenti']);
  }

}
