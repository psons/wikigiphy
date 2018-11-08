import { TestBed } from '@angular/core/testing';

import { WikiSearchService } from './wiki-search.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('WikiSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: WikiSearchService = TestBed.get(WikiSearchService);
    expect(service).toBeTruthy();
  });
});
