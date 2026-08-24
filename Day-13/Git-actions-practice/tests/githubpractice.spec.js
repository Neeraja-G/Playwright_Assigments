import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import { parse } from 'csv-parse/sync';

const csvPath = 'testdata/data.csv';
//npm instal csv-parse
const fileContent = fs.readFileSync(csvPath, 'utf-8');

const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
});

test.describe('Login data driven test', () => {

    for (const data of records) {

        test(
            `Login test ${data.email} and ${data.password}`,
            async ({ page }) => {

                await page.goto(
                    'https://demowebshop.tricentis.com/login'
                );

                // Fill login form
                await page.locator('#Email').fill(data.email);
                await page.locator('#Password').fill(data.password);

                // Click Login
                await page.locator('input[value="Log in"]').click();

                if (data.validity.toLowerCase() === 'valid') {

                    // Verify successful login
                    const logoutLink = page.locator('a[href="/logout"]');

                    await expect(logoutLink).toBeVisible({
                        timeout: 5000
                    });

                } else {

                    // Verify error message for invalid login
                    const errorMessage = page.locator(
                        '.validation-summary-errors'
                    );

                    await expect(errorMessage).toBeVisible({
                        timeout: 5000
                    });

                    // Verify user remains on login page
                    await expect(page).toHaveURL(
                        'https://demowebshop.tricentis.com/login'
                    );
                }
            }
        );
    }
});