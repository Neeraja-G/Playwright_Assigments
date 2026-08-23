import { test, expect } from '@playwright/test'
import { NewRegistrationPage } from '../pages/NewRegesterPage'
import { LoginPage } from '../pages/LoginPage'
import { urls } from '../utils/Urls'
import { NewRegisterData } from '../test-data/NewRegisterTestData'

test('New user registration and existing user login', async ({ page }) => {

  const registrationPage = new NewRegistrationPage(page)
  const loginPage = new LoginPage(page)

  await page.goto(urls.login)

  const registerVisible =
    await registrationPage.registerLink.isVisible()

  if (registerVisible) {

    // New user
    await registrationPage.clickRegister()

    await registrationPage.enterRegistrationDetails(
      NewRegisterData.email,
      NewRegisterData.password,
      NewRegisterData.confirmPassword
    )

    await registrationPage.createAccount()

    // Sign in after account creation
    await loginPage.login(
      NewRegisterData.email,
      NewRegisterData.password
    )

  } else {

    // Existing user
    await loginPage.login(
      NewRegisterData.email,
      NewRegisterData.password
    )
  }

  await expect(page).toHaveURL(urls.homepage)
})