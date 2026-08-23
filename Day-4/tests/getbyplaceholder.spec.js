import {test, expect} from '@playwright/test'

test('Get by place holder demo', async({page}) =>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/')
    await page.getByPlaceholder('Password').fill('abc123')
    //await page.goto('https://sbecagol.com/test-apps/playwright-locators/')
    // await page.getByPlaceholder("Search for products...").fill("laptop")
    // await page.getByPlaceholder("Enter you username").fill("neeraja")
})