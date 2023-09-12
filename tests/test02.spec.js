const {test, expect} = require('@playwright/test')
const fs = require('fs');

test('Weboldal E2E tesztelése', async ({page}) => {

  await page.goto('https://www.marczi.hu/')
  await page.waitForTimeout(1000);
  await page.locator('xpath=//*[@id="cookie-popup"]/button').click()
  await page.waitForTimeout(1000);

  await page.locator('xpath=//*[@id="event-calendar"]/table[1]/tbody/tr/td[3]/a').click()
  await page.waitForTimeout(300);
  await page.locator('xpath=//*[@id="event-calendar"]/table[1]/tbody/tr/td[3]/a').click()
  await page.waitForTimeout(300);
  await page.locator('xpath=//*[@id="event-calendar"]/table[3]/tbody/tr[1]/td[7]/a').click()
  await page.waitForTimeout(3500);

  const screenshotBuffer = await page.screenshot();
  fs.writeFileSync('műsor.jpg', screenshotBuffer)

  await page.fill('[name="searchword"]', 'koncert');
  await page.waitForTimeout(300);
  await page.press('[name="searchword"]', 'Enter');
  await page.waitForTimeout(300);

  const screenshotBuffer2 = await page.screenshot();
  fs.writeFileSync('koncert.jpg', screenshotBuffer)

  await page.waitForTimeout(2000);


  await page.close(); 
 
});

  