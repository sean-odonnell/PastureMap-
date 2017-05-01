import { PastureMapAppPage } from './app.po';

describe('pasture-map-app App', function() {
  let page: PastureMapAppPage;

  beforeEach(() => {
    page = new PastureMapAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
