import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Counter2Component),
      multi: true
    }
  ]
})
export class Counter2Component implements OnInit, ControlValueAccessor {
  counter = 0;
  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any) {
    if (value != undefined) {
      this.counter = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  increaseByOne() {
    this.counter++;
    this.propagateChange(this.counter);
  }

  decreaseByOne() {
    this.counter--;
    this.propagateChange(this.counter);
  }
}
