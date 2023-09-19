const {test, expect} = require('@playwright/test')
const fs = require('fs');
let date = new Date();

test('text verification', async ({page}) => {

  await page.goto('https://www.marczi.hu/')
  await page.waitForTimeout(1000);
 

        const kapcsolatButton = await page.$('text=KAPCSOLAT');

        if (kapcsolatButton) {
            fs.appendFileSync('result.txt', `KAPCSOLAT feliratú gomb van ${date}\n`);
          } else {
            fs.appendFileSync('result.txt', `KAPCSOLAT feliratú gomb nincs ${date}\n`);
          }


          const aktuálisButton = await page.$('text=AKTUÁLIS');

        if (aktuálisButton) {
            fs.appendFileSync('result.txt', `AKTUÁLIS feliratú gomb van ${date}\n`);
          } else {
            fs.appendFileSync('result.txt', `AKTUÁLIS feliratú gomb nincs ${date}\n`);
          }


          const korcsolyaButton = await page.$('text=KORCSOLYA');

        if (korcsolyaButton) {
            fs.appendFileSync('result.txt', `KORCSOLYA feliratú gomb van ${date}\n`);
          } else {
            fs.appendFileSync('result.txt', `KORCSOLYA feliratú gomb nincs ${date}\n`);
          }


          const JamesWebbButton = await page.$('text=James Webb');

        if (JamesWebbButton) {
            fs.appendFileSync('result.txt', `James Webb feliratú gomb van ${date}\n`);
          } else {
            fs.appendFileSync('result.txt', `James Webb feliratú gomb nincs ${date}\n`);
          }
       
   
   
   
   
        await page.close();
    
});
