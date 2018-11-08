import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {WikiSearchService} from '../wiki-search.service';


@Component({
  selector: 'app-wiki-result',
  templateUrl: './wiki-result.component.html',
  styleUrls: ['./wiki-result.component.css']
})
export class WikiResultComponent implements OnChanges {
  @Input() wikiSearchTerm: string;
  wikiSearchResults = '';

  constructor(
    private wikiSearch: WikiSearchService
  ) { }

  ngOnChanges() {
    this.loadWikiSearchResults(this.wikiSearchTerm);
  }

  private loadWikiSearchResults(searchKey: string) {
    const obs = this.wikiSearch.searchWikiFor(searchKey);
    obs.subscribe((results: any) => {
      this.wikiSearchResults = results;
      console.log(this.wikiSearchResults);
    });
  }

}
