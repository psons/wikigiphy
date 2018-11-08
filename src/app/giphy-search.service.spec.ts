import { TestBed } from '@angular/core/testing';

import { GiphySearchService } from './giphy-search.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('GiphySearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GiphySearchService = TestBed.get(GiphySearchService);
    expect(service).toBeTruthy();
  });
});
