//Playwright hooks
/*
| Hook         | When it runs          | Common use              |
| ------------ | --------------------- | ----------------------- |
| `beforeAll`  | Once before all tests | Start common setup      |
| `beforeEach` | Before every test     | Login, navigate to page |
| `afterEach`  | After every test      | Cleanup, screenshots    |
| `afterAll`   | Once after all tests  | Close/cleanup resources |
*/
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    // Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
});

test.afterEach(async ({ page }) => {

    // Logout after every test
        await page.locator('#logout2').click();
});

test('Home Page Test', async ({ page }) => {
    const products = page.locator('.hrefch');
    await expect(products).toHaveCount(9);
});


test('Add product to cart Test', async ({ page }) => {
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();

    // Handle alert before clicking Add to cart
    page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('Product Added.');
        await dialog.accept();
    });
    await page.locator('//a[normalize-space()="Add to cart"]').click();
});
/*
Test isolation means each test should run independently without being affected by another test.
| BrowserContext         | APIRequestContext                  |
| ---------------------- | ---------------------------------- |
| Used for UI testing    | Used for API testing               |
| Contains pages         | Sends HTTP requests                |
| Has cookies/storage    | Can maintain request state/cookies |
| Used with `page`       | Used with `request`                |
| Tests browser behavior | Tests backend/API behavior         |
*/
