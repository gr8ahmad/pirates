import { Component, OnInit } from '@angular/core';
import { Pirate } from '../pirate';
import { PirateService } from '../pirate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private pirateService: PirateService) { }
  pirates: Pirate[] = [];

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.pirateService.getPirates()
      .subscribe(pirates => this.pirates = pirates.slice(0, 5));
  }
}