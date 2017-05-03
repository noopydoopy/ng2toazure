import { Ng2toazurePage } from './app.po';

describe('ng2toazure App', function() {
  let page: Ng2toazurePage;

  beforeEach(() => {
    page = new Ng2toazurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
