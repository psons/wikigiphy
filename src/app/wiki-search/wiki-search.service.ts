import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export const giphyConfig = {
  urlBase: 'https://en.wikipedia.org/w/api.php?',
  urlSearchArgs: 'action=opensearch&search=', // + keyword +
  urlReturnArgs: '&origin=*&format=json',
}

@Injectable({
  providedIn: 'root'
})
export class WikiSearchService {
  constructor(private http: HttpClient) { }

  searchWikiFor(keyword: string): Observable<any> {
    console.log(`WikiSearchService.searchWikiFor(keyword): keyword: ${keyword}`);
    const url: string = giphyConfig.urlBase +
      giphyConfig.urlSearchArgs +
      keyword +
      giphyConfig.urlReturnArgs;
    console.log(url);

    return this.http.get(url);

    }
  }
