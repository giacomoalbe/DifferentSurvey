import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {
  flags: string[] = [
    "ITA",
    "ENG",
    "BEL",
    "AUT",
    "USA"
  ];

  selectedFlag: string = "";

  constructor() { }

  ngOnInit() {
  }

  selectFlag(flag: string) : void {
    console.log(flag);

    //let selectedFlag = flag;
    //let flagIsSelected = selectedFlag == flag;
    this.selectedFlag = flag;

  }
}
