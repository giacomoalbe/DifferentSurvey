import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true,
    }
  ]
})
export class StarRatingComponent implements OnInit, ControlValueAccessor {
  rating = 0;
  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any) {
    if (value != undefined) {
      this.rating = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  setValue(star) {
    this.rating = star;

    this.propagateChange(this.rating);
  }
}
