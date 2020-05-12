import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Wiki } from './wiki';
import { WIKIS } from './mock-wikis'

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  getWikis(): Observable<Wiki[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('WikiService: fetched wikis')
    return of(WIKIS);
  }

  constructor(private messageService: MessageService) { }
}
