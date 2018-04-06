import { Component, OnInit } from '@angular/core';
import { Pirate } from '../pirate'
import { PIRATES } from '../mock-pirates'

@Component({
  selector: 'app-pirates',
  templateUrl: './pirates.component.html',
  styleUrls: ['./pirates.component.css']
})
export class PiratesComponent implements OnInit {
  pirates = PIRATES;
  selectedPirate: Pirate;
  constructor() { }

  ngOnInit() {
  }
  onSelect(pirate: Pirate):void {
    this.selectedPirate = pirate;
  }

}
