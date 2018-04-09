import { Injectable } from '@angular/core';
import { Pirate } from './pirate';
import { PIRATES } from './mock-pirates';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
@Injectable()
export class PirateService {

  constructor(private messageService:MessageService) { }
  getPirates(): Observable<Pirate[]> {
    this.messageService.add("PIRATE SERVICE: Fetched Pirates")
    return of(PIRATES)
  }
  getPirate(id:number): Observable<Pirate> {
    this.messageService.add(`PirateService: fetched pirate id=${id}`);
    return of(PIRATES.find(pirate => pirate.id === id))
  }
}
