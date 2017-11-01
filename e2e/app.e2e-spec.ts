import { NgBaseProjectPage } from './app.po';

describe('ng-base-project App', () => {
  let page: NgBaseProjectPage;

  beforeEach(() => {
    page = new NgBaseProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cgh!');
  });
});
