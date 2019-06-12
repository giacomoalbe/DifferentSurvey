import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import { minCharLengthValidator } from '../../validators/custom-validator';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  userForm = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['',
      [Validators.required, minCharLengthValidator("z", 3435)]
    ]
  });

  ngOnInit() {
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log("Nummefreghi!");
    }
  }
}
