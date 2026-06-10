const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

test(
    'CT004 - Login inválido',
    async ({ page }) => {

        const homePage =
            new HomePage(page);

        const loginPage =
            new LoginPage(page);

        await homePage.acessarSite();

        await homePage.clicarEmLogin();

        await loginPage.realizarLogin(
            'teste@teste.com',
            '123456'
        );

        await expect(
            loginPage.obterMensagemErro()
        ).toContainText(
            'incorrect'
        );
    }
);