import { Component, OnInit, Input } from '@angular/core';
import { Wiki } from '../wiki';

@Component({
  selector: 'app-wiki-detail',
  templateUrl: './wiki-detail.component.html',
  styleUrls: ['./wiki-detail.component.scss']
})
export class WikiDetailComponent implements OnInit {

  @Input() wiki: Wiki;

  constructor() { }

  ngOnInit(): void {
  }

}
