import { test, expect } from '@playwright/test';

test('Browser', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.browserstack.com/guide/playwright-architecture');

  await expect(page).toHaveTitle(/Playwright Architecture/);

  await context.close();
});

test('Multiple browser contexts', async ({ browser }) => {

  const context1 = await browser.newContext();
  const context2 = await browser.newContext();

  const page1 = await context1.newPage();
  const page2 = await context2.newPage();

  await page1.goto('https://www.browserstack.com/guide/playwright-architecture');
  await page2.goto('https://www.browserstack.com/guide/playwright-architecture');

  await context1.close();
  await context2.close();
});


test.beforeAll(async () => {
  console.log('Runs once before all tests');
});

test.beforeEach(async ({ page }) => {
  console.log('Runs before every test');
  await page.goto('https://www.browserstack.com/guide/playwright-architecture');
});

test.afterEach(async () => {
  console.log('Runs after every test');
});

test.afterAll(async () => {
  console.log('Runs once after all tests');
});

test('Test 1', async ({ page }) => {
  console.log('Test 1');
});

test('Test 2', async ({ page }) => {
  console.log('Test 2');
});