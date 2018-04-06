import { Component, OnInit, Input } from '@angular/core';
import { Pirate } from '../pirate';
@Component({
  selector: 'app-pirate-detail',
  templateUrl: './pirate-detail.component.html',
  styleUrls: ['./pirate-detail.component.css']
})
export class PirateDetailComponent implements OnInit {
@Input() pirate: Pirate;
  constructor() { }

  ngOnInit() {
  }

}
