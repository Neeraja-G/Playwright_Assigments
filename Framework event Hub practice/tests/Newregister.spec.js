import { test, expect } from '@playwright/test'
import { NewRegistrationPage } from '../pages/NewRegesterPage'
import { LoginPage } from '../pages/LoginPage'
import { urls } from '../utils/Urls'
import { NewRegisterData } from '../test-data/NewRegisterTestData'

test('New user registration and existing user login', async ({ page }) => {

  const registrationPage = new NewRegistrationPage(page)
  const loginPage = new LoginPage(page)

  await page.goto(urls.login)

  // Check whether Register link is available
  const registerVisible = await registrationPage.registerLink.isVisible()

  if (registerVisible) {

    // New user registration
    await registrationPage.clickRegister()

    await registrationPage.enterRegistrationDetails(
      NewRegisterData.email,
      NewRegisterData.password,
      NewRegisterData.confirmPassword
    )

    await registrationPage.createAccount()

    // Go back to login page after registration
    await page.goto(urls.login)

    // Login with newly created account
    await loginPage.login(
      NewRegisterData.email,
      NewRegisterData.password
    )

  } else {

    // Existing user login
    await loginPage.login(
      NewRegisterData.email,
      NewRegisterData.password
    )
  }

  // Verify successful login
  await expect(page).toHaveURL(urls.homepage)

  // Save authentication state
  await page.context().storageState({
    path: 'auth/sessionstorage.json'
  })
})