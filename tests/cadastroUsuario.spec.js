const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const SignupPage = require('../pages/SignupPage');
const AccountInformationPage = require('../pages/AccountInformationPage');

const {
    gerarUsuario,
    salvarUsuario
} = require('../utils/testData');

test(
    'CT005 - Cadastro completo de usuário',
    async ({ page }) => {

        const usuario =
            gerarUsuario();

        const homePage =
            new HomePage(page);

        const signupPage =
            new SignupPage(page);

        const accountInformationPage =
            new AccountInformationPage(page);

        await homePage.acessarSite();

        await homePage.clicarEmLogin();

        await signupPage.iniciarCadastro(
            usuario.nome,
            usuario.email
        );

        await expect(page)
            .toHaveURL(/signup/);

        await accountInformationPage
            .preencherDadosConta(
                usuario.senha
            );

        await accountInformationPage
            .criarConta();

        await salvarUsuario(
            usuario
        );

        console.log(
            `Usuário criado: ${usuario.email}`
        );
    }
);