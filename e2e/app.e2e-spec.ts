import { TarenaPage } from './app.po';

describe('tarena App', () => {
  let page: TarenaPage;

  beforeEach(() => {
    page = new TarenaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
