import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const jsonpath = 'testdata/data.json';
const loginTestData = JSON.parse(fs.readFileSync(jsonpath, 'utf-8'));

test.describe('Login data driven test', () => {

    for (const data of loginTestData) {

        test(`Login test ${data.email} and ${data.password}`, async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/login');

            // Fill login form
            await page.locator('#Email').fill(data.email);
            await page.locator('#Password').fill(data.password);
            await page.locator('input[value="Log in"]').click();

            if (data.validity.toLowerCase() === 'valid') {

                // Successful login
                const logoutLink = page.locator('a[href="/logout"]');

                await expect(logoutLink).toBeVisible({
                    timeout: 5000
                });

            } else {

                // Invalid login
                const errorMessage = page.locator('.validation-summary-errors');

                await expect(errorMessage).toBeVisible({
                    timeout: 5000
                });

                // Verify user remains on login page
                await expect(page).toHaveURL(
                    'https://demowebshop.tricentis.com/login'
                );
            }
        });
    }
});