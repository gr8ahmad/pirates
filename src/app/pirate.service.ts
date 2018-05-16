import { Injectable } from '@angular/core';
import { Pirate } from './pirate';
import { PIRATES } from './mock-pirates';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { Http } from '@angular/http';
@Injectable()
export class PirateService {
baseUrl:string;
  constructor(private messageService:MessageService,
              private http: Http) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
               }
  getPirates(): Observable<Pirate[]> {
    this.messageService.add("PIRATE SERVICE: Fetched Pirates")
    return of(PIRATES)
  }
  getPirate(id:number): Observable<Pirate> {
    this.messageService.add(`PirateService: fetched pirate id=${id}`);
    return of(PIRATES.find(pirate => pirate.id === id))
  }
  addPirates(pirates: Pirate[]) {
    return this.http.put('https://pirates-72ec7.firebaseio.com/data.json', pirates);
  }
}
