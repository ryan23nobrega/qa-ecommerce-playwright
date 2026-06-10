class SignupPage {

    constructor(page) {

        this.page = page;

        this.nameField =
            'input[data-qa="signup-name"]';

        this.emailField =
            'input[data-qa="signup-email"]';

        this.signupButton =
            'button[data-qa="signup-button"]';
    }

    async iniciarCadastro(nome, email) {

        await this.page.fill(
            this.nameField,
            nome
        );

        await this.page.fill(
            this.emailField,
            email
        );

        await this.page.click(
            this.signupButton
        );
    }
}

module.exports = SignupPage;