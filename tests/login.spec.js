class LoginPage {

    constructor(page) {

        this.page = page;

        this.emailField =
            'input[data-qa="login-email"]';

        this.passwordField =
            'input[data-qa="login-password"]';

        this.loginButton =
            'button[data-qa="login-button"]';

        this.errorMessage =
            'form[action="/login"] p';
    }

    async realizarLogin(email, senha) {

        await this.page.fill(
            this.emailField,
            email
        );

        await this.page.fill(
            this.passwordField,
            senha
        );

        await this.page.click(
            this.loginButton
        );
    }
}

module.exports = LoginPage;