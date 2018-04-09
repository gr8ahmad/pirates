import { Component, OnInit } from '@angular/core';
import { Pirate } from '../pirate';
import { PirateService } from '../pirate.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pirate-detail',
  templateUrl: './pirate-detail.component.html',
  styleUrls: ['./pirate-detail.component.css']
})
export class PirateDetailComponent implements OnInit {
  id:number;
  pirate: Pirate;
  constructor(private pirateService: PirateService,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getPirate();
  }
  getPirate():void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.pirateService.getPirate(this.id).subscribe((pirate=> {
      this.pirate = pirate;
    }))
  }
  goBack() {
    this.location.back();
  }

}
