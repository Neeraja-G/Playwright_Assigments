export class NewRegistrationPage {
  constructor(page) {
    this.page = page

    this.registerLink = page.getByRole('link', {
      name: 'Register'
    })

    this.email = page.getByPlaceholder('you@email.com')

    this.password = page.getByPlaceholder(
      'Min 8 chars, uppercase, number & symbol'
    )

    this.confirmPassword = page.getByPlaceholder(
      'Repeat your password'
    )

    this.createAccountButton = page.getByRole('button', {
      name: 'Create Account'
    })
  }

  async clickRegister() {
    await this.registerLink.click()
  }

  async enterRegistrationDetails(
    email,
    password,
    confirmPassword
  ) {
    await this.email.fill(email)
    await this.password.fill(password)
    await this.confirmPassword.fill(confirmPassword)
  }

  async createAccount() {
    await this.createAccountButton.click()
  }
}
