import { test, expect } from "@playwright/test";

test.describe("Playwright Locators Demo", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://sbecagol.com/test-apps/playwright-locators/");
  });

  test("getByRole() Locator", async ({ page }) => {

    await expect(page.getByRole("heading", { name: "1. getByRole()" })).toBeVisible();

    const primaryButton = page.getByRole("button", {
      name: "Primary Button",
    });

    await expect(primaryButton).toBeVisible();
    await primaryButton.click();
    await expect(primaryButton).toHaveText("Primary Button");

    const secondaryButton = page.getByRole("button", {
      name: "Secondary Button",
    });

    await expect(secondaryButton).toBeVisible();
    await secondaryButton.click();
    await expect(secondaryButton).toHaveText("Secondary Button"); 
    
    const DisabledButton = page.getByRole("button", {
      name: "Disabled Button",
    }); 

    await expect(DisabledButton).toBeVisible(); 

   await page.getByRole("checkbox").click();
   await page.getByRole("radio").nth(0).check(); // First radio button
   await page.getByRole("radio").nth(1).check(); // Second radio button
   await page.getByRole("radio").nth(2).check(); // Third radio button

   await page.getByRole("link", { name: "Home" }).click();
   await expect(page).toHaveURL("https://sbecagol.com/test-apps/playwright-locators/#home");
   await page.getByRole("link", { name: "About" }).click();
   await expect(page).toHaveURL("https://sbecagol.com/test-apps/playwright-locators/#about");
   await page.getByRole("link", { name: "Contact" }).click();
   await expect(page).toHaveURL("https://sbecagol.com/test-apps/playwright-locators/#contact");  

  });

});