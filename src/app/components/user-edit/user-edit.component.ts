import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  isEdit = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let userId = this.route.snapshot.paramMap.get("user_id");

    console.log(userId);

    this.isEdit = userId != null;
  }

  goBack() {
    this.router.navigate(['utenti/list']);
  }

}
