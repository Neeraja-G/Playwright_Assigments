// @ts-check
import { test, expect } from '@playwright/test';

test('Login Page', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

  // Register
  const registerHereButton = page.locator('.login-wrapper-footer-text a');
  await expect(registerHereButton).toHaveText('Register here');
  await registerHereButton.click();

  await expect(page).toHaveURL(
    'https://rahulshettyacademy.com/client/#/auth/register'
  );

  // First Name
  const firstNameInput = page.locator('#firstName');
  await expect(firstNameInput).toBeVisible();
  await firstNameInput.fill('John');
  await expect(firstNameInput).toHaveValue('John');

  // Last Name
  const lastNameInput = page.locator('#lastName');
  await expect(lastNameInput).toBeVisible();
  await lastNameInput.fill('Doe');
  await expect(lastNameInput).toHaveValue('Doe');

  // Email
  const emailInput = page.locator('#userEmail');
  await expect(emailInput).toBeVisible();
  await emailInput.fill('johndoe@example.com');
  await expect(emailInput).toHaveValue('johndoe@example.com');

  // Mobile
  const userMobileInput = page.locator('#userMobile');
  await expect(userMobileInput).toBeVisible();
  await userMobileInput.fill('1234567890');
  await expect(userMobileInput).toHaveValue('1234567890');

  // Occupation
const occupationInput = page.locator('select');
await occupationInput.selectOption({ label: 'Engineer' });

const genderRadioButton = page.getByRole('radio', {
  name: 'Male',
  exact: true
});

await expect(genderRadioButton).toBeVisible();
await genderRadioButton.check();
await expect(genderRadioButton).toBeChecked();

// Password
const passwordInput = page.locator('#userPassword');
await expect(passwordInput).toBeVisible();
await passwordInput.fill('Password123');

  // Confirm Password
  const confirmPasswordInput = page.locator('#confirmPassword');
  await expect(confirmPasswordInput).toBeVisible();
  await confirmPasswordInput.fill('Password123');
  await expect(confirmPasswordInput).toHaveValue('Password123');

  // Age checkbox
  const ageCheckbox = page.locator('input[type="checkbox"]');
  await ageCheckbox.check();
  await expect(ageCheckbox).toBeChecked();

  // Register
  const registerButton = page.locator('#login');
  await expect(registerButton).toBeVisible();
  await registerButton.click();

  // Go back to Login
  await page.goBack();

  await expect(page).toHaveURL(
    'https://rahulshettyacademy.com/client/#/auth/login'
  );
  const loginEmailInput = page.locator('#userEmail');
  await expect(loginEmailInput).toBeVisible();
  await loginEmailInput.fill('anshika@gmail.com');
   const loginPasswordInput = page.locator('#userPassword');
  await expect(loginPasswordInput).toBeVisible();
  await loginPasswordInput.fill('Iamking@000');

  const loginButton = page.locator('#login');
  await expect(loginButton).toBeVisible();
  await loginButton.click();

  // Verify successful login
  await expect(page).toHaveURL(
    'https://rahulshettyacademy.com/client/#/dashboard'
  );
});

