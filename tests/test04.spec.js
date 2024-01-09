const {test, expect} = require('@playwright/test')
const fs = require('fs');

test('Wikipedia Login Test', async ({page}) => {

  await page.goto('https://hu.wikipedia.org/wiki/Kezd%C5%91lap')
  await page.waitForTimeout(1000);
  await page.locator('xpath=//*[@id="pt-login-2"]/a/span').click()
  await page.waitForTimeout(1000);
  
  await page.fill('[name="wpName"]', 'Antaltesztelo');
  await page.waitForTimeout(500);

  await page.fill('[name="wpPassword"]', 'Tesztelo01');
  await page.waitForTimeout(500);

  await page.locator('xpath=//*[@id="wpLoginAttempt"]').click()

  const screenshotBuffer = await page.screenshot();
  fs.writeFileSync('wikipedia_login.jpg', screenshotBuffer);

  
  await page.waitForTimeout(1000);


  
  await page.close(); 
 
});
  
  
  