import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterComponent),
      multi: true
    }
  ]
})
export class CounterComponent implements OnInit, ControlValueAccessor {
  counter = 0;
  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any) {
    if (value != undefined && Number.isInteger(value)) {
      this.counter = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {};

  increment(offset) {
    this.counter += offset;
    this.propagateChange(this.counter);
  }
}
