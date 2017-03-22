import { AngCLIPage } from './app.po';

describe('ang-cli App', () => {
  let page: AngCLIPage;

  beforeEach(() => {
    page = new AngCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
