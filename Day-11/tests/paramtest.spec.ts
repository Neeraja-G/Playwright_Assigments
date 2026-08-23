import { test, expect } from '@playwright/test';


//test data


const SearchItems:string[] = ['laptop', 'gift card', 'smartphone', 'monitor'];

//for-of using loop state
// for (const item of SearchItems){

    
// test(`Search test for ${item }`, async ({ page }) => {
//     await page.goto('https://demowebshop.tricentis.com/');
//     await page.locator('#small-searchterms').fill(item ); // fill the text in search box
//     await page.locator('input[value="Search"]').click(); // click on the button
//     await expect.soft(page.locator('h2 a').nth(0)).toContainText(item , { ignoreCase: true }); // check if result
// });
// }


//usng for each 
// SearchItems.forEach((item)=>{
//     test(`Search test for ${item }`, async ({ page }) => {
//     await page.goto('https://demowebshop.tricentis.com/');
//     await page.locator('#small-searchterms').fill(item ); // fill the text in search box
//     await page.locator('input[value="Search"]').click(); // click on the button
//     await expect.soft(page.locator('h2 a').nth(0)).toContainText(item , { ignoreCase: true }); // check if result
// });
// })

//describe

test.describe("SearchItems", async() => {
    SearchItems.forEach((item) => {
        test(`Search test for ${item}`, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/');

            await page.locator('#small-searchterms').fill(item);

            await page.locator('input[value="Search"]').click();

            await expect.soft(page.locator('h2 a').nth(0))
                .toContainText(item, { ignoreCase: true });
        });
    });
});