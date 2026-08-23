class LoginPage {
    constructor(page) {
        this.page = page;

        this.email = page.getByRole('textbox', { name: 'Email' });

       this.password = page.getByPlaceholder('Password');

        this.signInButton = page.getByRole('button', {
            name: 'Sign In'
        });
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
    }
}

module.exports = { LoginPage };