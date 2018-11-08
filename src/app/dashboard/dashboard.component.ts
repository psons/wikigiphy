import {Component, Input, OnInit} from '@angular/core';
import {WikiSearchService} from '../wiki-search/wiki-search.service';
import {HistoryService} from '../history.service';
import {GiphySearchService} from '../giphy-search.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // @Input() searchText = '';
  haveUserSubmit = '';
  giphySearchResults ;
  searchArg = '';
  giffyGif = '';

  constructor(
    private giphySearch: GiphySearchService,
    public historyService: HistoryService
    ) {
  }

  ngOnInit() {}

  submit(searchKey: string) {
    this.searchArg = searchKey;
    this.haveUserSubmit = 'yes';
    console.log(`DashboardComponet.submit(searchKey) searchKey: ${searchKey}`);
    this.historyService.append(this.searchArg);
    // loadWikiSearchResults(this.searchArg);
    this.loadGifySearchResults(this.searchArg);
  }


  private loadGifySearchResults(searchKey: string) {
      const obs = this.giphySearch.searchGiphyFor(searchKey, environment.giphyApiKey);
      obs.subscribe((results: any) => {
        this.giphySearchResults = results;
        this.giffyGif = this.giphySearchResults.data[0].images.fixed_height_downsampled.url;
        console.log(this.giphySearchResults);
      });
  }

}
