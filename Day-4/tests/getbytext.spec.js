import { test, expect } from "@playwright/test";

test.describe("Playwright Locators Demo", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://sbecagol.com/test-apps/playwright-locators/");
  });
 
  test("getByText() Locator", async ({ page }) => { 
    await expect(page.getByText("2. getByText()")).toBeVisible();
    await expect(page.getByText("Locate elements by their text content. Useful for finding elements with specific visible text.")).toBeVisible();
    await expect(page.getByText("This is a paragraph with specific text content that can be located.")).toBeVisible();
    await expect(page.getByText("Welcome to Testing")).toBeVisible();
    await expect(page.getByText("Playwright Makes Testing Easy")).toBeVisible();
    await expect(page.getByText("First list item with unique text")).toBeVisible();
    await expect(page.getByText("Second list item for testing")).toBeVisible();
    await expect(page.getByText("Third item in the list")).toBeVisible();
    await expect(page.getByText("Final list item here")).toBeVisible();
  });
});