import puppeteer from 'puppeteer';

jest.setTimeout(200000);

describe('Card Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      // devtools: true,
    });
    page = await browser.newPage();
  });

  test.each([
    ['.success-msg', 'valid', '4556765265954626'],
    ['.error-msg', 'invalid', '4556765265954621'],
    ['.error-msg', 'invalid', '45567'],
    ['.error-msg', 'invalid', ''],
  ])('should add "success-msg" class if card number is valid', async (msg, _, cardNumber) => {
    await page.goto('http://localhost:9000', { waitUntil: 'load' });
    await page.waitForSelector('#form');

    const form = await page.$('#form');
    const input = await form.$('.input');
    const button = await form.$('.button');

    await input.type(cardNumber);
    await button.click();

    await page.waitForSelector(msg);
  });

  afterEach(async () => {
    await browser.close();
  });
});
