class AccountInformationPage {

    constructor(page) {

        this.page = page;

        this.passwordField = '#password';

        this.firstNameField = '#first_name';

        this.lastNameField = '#last_name';

        this.addressField = '#address1';

        this.countrySelect = '#country';

        this.stateField = '#state';

        this.cityField = '#city';

        this.zipcodeField = '#zipcode';

        this.mobileField = '#mobile_number';

        this.createAccountButton =
            'button[data-qa="create-account"]';
    }

    async preencherDadosConta(senha) {

        await this.page.fill(
            this.passwordField,
            senha
        );

        await this.page.fill(
            this.firstNameField,
            'Ryan'
        );

        await this.page.fill(
            this.lastNameField,
            'Nobrega'
        );

        await this.page.fill(
            this.addressField,
            'Rua QA Automation'
        );

        await this.page.selectOption(
            this.countrySelect,
            'Canada'
        );

        await this.page.fill(
            this.stateField,
            'Ontario'
        );

        await this.page.fill(
            this.cityField,
            'Toronto'
        );

        await this.page.fill(
            this.zipcodeField,
            '12345'
        );

        await this.page.fill(
            this.mobileField,
            '83999999999'
        );
    }

    async criarConta() {

        await this.page.click(
            this.createAccountButton
        );
    }
}

module.exports =
    AccountInformationPage;