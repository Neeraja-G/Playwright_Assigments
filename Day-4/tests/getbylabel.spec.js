import { test, expect } from "@playwright/test";

test.describe("Playwright Locators Demo", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://sbecagol.com/test-apps/playwright-locators/");
  });

  test("getByLabel() Locator", async ({ page }) => {
    await expect(page.getByText("3. getByLabel()")).toBeVisible();

    const fullName = page.getByLabel("Full Name");
    await expect(fullName).toBeVisible();
    await fullName.fill("John Doe");

    const emailAddress = page.getByLabel("Email Address");
    await expect(emailAddress).toBeVisible();
    await emailAddress.fill("john.doe@example.com");
  });

});