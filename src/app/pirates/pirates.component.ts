import { Component, OnInit } from '@angular/core';
import { Pirate } from '../pirate'
import { PIRATES } from '../mock-pirates'
import { PirateService } from '../pirate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pirates',
  templateUrl: './pirates.component.html',
  styleUrls: ['./pirates.component.css']
})
export class PiratesComponent implements OnInit {
  pirates:Pirate[];
  constructor(private pirateService: PirateService,
              private router:Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getPirates();
  }
  getPirates(): void {
    this.pirateService.getPirates().subscribe((pirates) => {
      this.pirates = pirates;
    })
  }

}
