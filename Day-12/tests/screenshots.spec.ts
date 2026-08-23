import { test, expect } from '@playwright/test';

test('screenshot Demo', async ({ page }) => {
 

  await page.goto('https://demowebshop.tricentis.com/');

  const timestamp = Date.now();

  // Page screenshot
  await page.screenshot({
    path: `screenshots/homepage${timestamp}.png`
  });

  // Full-page screenshot
  await page.screenshot({
    path: `screenshots/FullPage${timestamp}.png`,
    fullPage: true
  });

  // Element screenshot
  const logo = page.locator("img[alt='Tricentis Demo Web Shop']");

  await logo.screenshot({
    path: `screenshots/logo${timestamp}.png`
  });

  const featureproduct = page.locator('.product-grid.home-page-product-grid');

  await featureproduct .screenshot({
    path: `screenshots/featureproduct ${timestamp}.png`
  });
});


//npx playwright test tests/example.spec.ts -g "test name" --trace on

//we can use code
/*
 context().tracing.start({ screenshots: true, snapshots: true });
 context().tracing.stop({path:'trace.zip'})
  npx playwright show-trace trace.zip
  https://trace.playwright.dev/
*/

// npx playwright test --retries=2