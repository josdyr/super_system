import { Component, OnInit } from '@angular/core';

import { Wiki } from '../wiki';
import { WikiService } from '../wiki.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {

  wikis: Wiki[];

  // wiki: Wiki = {
  //   id: 1,
  //   name: 'Title of wiki1'
  // };

  selectedWiki: Wiki;

  constructor(private wikiService: WikiService, private messageService: MessageService) { }

  onSelect(wiki: Wiki): void {
    this.selectedWiki = wiki;
    this.messageService.add(`WikiService: Selected wiki id=${wiki.id}`);
  }

  ngOnInit(): void {
    this.getWikis();
  }

  getWikis(): void {
    this.wikiService.getWikis().subscribe(wikis => this.wikis = wikis);
  }

}
