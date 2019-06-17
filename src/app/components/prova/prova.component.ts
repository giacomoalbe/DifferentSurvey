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
      [Validators.required, minCharLengthValidator("z", 3)]
    ],
    rating: [1,
      [Validators.min(4)]
    ],
    counter: [5,
      [Validators.min(0), Validators.max(10)]
    ],
    counter2: [0],
    flag: ['ITA']
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

  resetRating() {
    this.userForm.controls.rating.setValue(0);
  }
}
