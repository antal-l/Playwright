const {test, expect} = require('@playwright/test')
const fs = require('fs');

test('My first test', async ({page}) => {

  await page.goto('https://google.com')
  await page.click('text="Az összes elfogadása"');
  
  await page.fill('[name="q"]', 'tesla');
  await page.waitForTimeout(2000);
  await page.press('[name="q"]', 'Enter')

 await page.click('text=Wikipedia');
 await page.waitForTimeout(2000);
  
  const screenshotBuffer = await page.screenshot();
  fs.writeFileSync('wikipedia.png', screenshotBuffer);
  
  await page.waitForTimeout(2000);
  
  await page.close();
 
});

