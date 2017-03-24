import { AngularPortionPage } from './app.po';

describe('angular-portion App', () => {
  let page: AngularPortionPage;

  beforeEach(() => {
    page = new AngularPortionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
