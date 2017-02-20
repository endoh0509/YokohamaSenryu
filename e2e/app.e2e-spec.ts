import { YokohamaSenryuPage } from './app.po';

describe('yokohama-senryu App', function() {
  let page: YokohamaSenryuPage;

  beforeEach(() => {
    page = new YokohamaSenryuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
