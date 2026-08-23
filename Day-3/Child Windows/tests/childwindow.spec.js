import {test, expect} from '@playwright/test'

test('Child Windows handling', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractice/');

    const documentLink = page.locator("[href*='documents-request']");

   const [newPage] = await Promise.all([
    context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
    documentLink.click()
]);

await newPage.waitForLoadState();

const text = await newPage.locator('.red').textContent();
const arrayText = text.split("@")
const domain= arrayText[1].split(" ")[0]
console.log(domain);
 await page.locator("#username").fill(domain);
 await page.pageErrors();
 console.log (await page.locator("#username").inputValue());
   
});
