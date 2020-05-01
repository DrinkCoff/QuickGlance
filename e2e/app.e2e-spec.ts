import { QuickGlancePage } from './app.po';

describe('quick-glance App', function() {
  let page: QuickGlancePage;

  beforeEach(() => {
    page = new QuickGlancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
