import { CaposongWebPage } from './app.po';

describe('caposong-web App', () => {
  let page: CaposongWebPage;

  beforeEach(() => {
    page = new CaposongWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
