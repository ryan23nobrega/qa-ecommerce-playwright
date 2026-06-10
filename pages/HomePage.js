class HomePage {

    constructor(page) {

        this.page = page;

        this.loginLink =
            'a[href="/login"]';
    }

    async acessarSite() {

        await this.page.goto(
            'https://automationexercise.com',
            {
                waitUntil: 'domcontentloaded',
                timeout: 60000
            }
        );
    }

    async clicarEmLogin() {

        await this.page.click(
            this.loginLink
        );
    }
}

module.exports =
    HomePage;