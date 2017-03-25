import { LessAppTestPage } from './app.po';

describe('less-app-test App', () => {
  let page: LessAppTestPage;

  beforeEach(() => {
    page = new LessAppTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
