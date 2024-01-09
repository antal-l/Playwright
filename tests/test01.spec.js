const {test, expect} = require('@playwright/test')
const fs = require('fs');

test('Google search and screenshot', async ({page}) => {

  await page.goto('https://google.com')
  await page.waitForTimeout(1000);
  await page.locator('xpath=//*[@id="L2AGLb"]/div').click()
  await page.waitForTimeout(1000);
  
  await page.fill('[name="q"]', 'tesla');
  await page.waitForTimeout(500);
  await page.press('[name="q"]', 'Enter')
  await page.waitForTimeout(1000);

 await page.click('text=Wikipedia');
 await page.waitForTimeout(2000);
  
  const screenshotBuffer = await page.screenshot();
  fs.writeFileSync('google_search_and_screenshot.jpg', screenshotBuffer);
  
  await page.waitForTimeout(2000);
  
  await page.close(); 
 
});
  

