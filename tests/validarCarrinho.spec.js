const { test, expect } = require('@playwright/test');

const HomePage =
    require('../pages/HomePage');

const ProductsPage =
    require('../pages/ProductsPage');

const CartPage =
    require('../pages/CartPage');

test(
    'CT009 - Validar produto no carrinho',
    async ({ page }) => {

        const homePage =
            new HomePage(page);

        const productsPage =
            new ProductsPage(page);

        const cartPage =
            new CartPage(page);

        await homePage.acessarSite();

        await productsPage
            .acessarProdutos();

        await productsPage
            .adicionarPrimeiroProdutoAoCarrinho();

        await productsPage
            .visualizarCarrinho();

        await expect(
            cartPage
                .obterNomeProduto()
        ).toContainText(
            'Blue Top'
        );

        await expect(
            cartPage
                .obterQuantidadeProduto()
        ).toContainText(
            '1'
        );
    }
);