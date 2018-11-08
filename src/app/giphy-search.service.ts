import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export const giphyConfig = {
  // https://api.giphy.com/v1/gifs/search?api_key=[YOUR-API-KEY]&q=dog&limit=5&offset=0&rating=G&lang=en"
  urlBase: 'https://api.giphy.com/v1/gifs/search?api_key=', // + apiKey +
  urlSearchArgs: '&q=', // + keyword +
  urlReturnArgs: '&limit=5&offset=0&rating=G&lang=en',
}

@Injectable({
  providedIn: 'root'
})
export class GiphySearchService {

  constructor(private http: HttpClient) {
  }

  searchGiphyFor(keyword: string, apiKey: string): Observable<any> {
    console.log(`GiphySearchService.searchGiphyFor(keyword): keyword: ${keyword}`);
    let url = giphyConfig.urlBase + apiKey +
      giphyConfig.urlSearchArgs +
      keyword +
      giphyConfig.urlReturnArgs;
    console.log(url);
    return this.http.get(url);
  }
}
