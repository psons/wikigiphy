import { WikiSearchModule } from './wiki-search.module';

describe('WikiSearchModule', () => {
  let wikiSearchModule: WikiSearchModule;

  beforeEach(() => {
    wikiSearchModule = new WikiSearchModule();
  });

  it('should create an instance', () => {
    expect(wikiSearchModule).toBeTruthy();
  });
});
