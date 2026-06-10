class LoginPage {

    constructor(page) {

        this.page = page;

        this.loginTitle = 'h2';

        this.emailField =
            'input[data-qa="login-email"]';

        this.passwordField =
            'input[data-qa="login-password"]';

        this.loginButton =
            'button[data-qa="login-button"]';

        this.errorMessage =
            'form[action="/login"] p';

        this.loggedUser =
            'a:has-text("Logged in as")';
    }

    validarTelaLogin() {
        return this.page
            .locator(this.loginTitle)
            .first();
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

    obterMensagemErro() {
        return this.page
            .locator(this.errorMessage);
    }

    obterUsuarioLogado() {
        return this.page
            .locator(this.loggedUser);
    }
}

module.exports = LoginPage;