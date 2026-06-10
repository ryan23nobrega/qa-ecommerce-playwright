const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

const {
    obterUsuario
} = require('../utils/testData');

test(
    'CT006 - Login válido',
    async ({ page }) => {

        const usuario =
            await obterUsuario();

        const homePage =
            new HomePage(page);

        const loginPage =
            new LoginPage(page);

        await homePage.acessarSite();

        await homePage.clicarEmLogin();

        await loginPage.realizarLogin(
            usuario.email,
            usuario.senha
        );

        await expect(
            loginPage.obterUsuarioLogado()
        ).toBeVisible();

        console.log(
            `Login realizado com: ${usuario.email}`
        );
    }
);