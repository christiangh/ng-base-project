import { browser, by, element } from 'protractor';

export class NgBaseProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cgh-root h1')).getText();
  }
}
