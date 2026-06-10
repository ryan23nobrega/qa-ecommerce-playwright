const { test, expect } = require('@playwright/test');

const HomePage =
    require('../pages/HomePage');

const ProductsPage =
    require('../pages/ProductsPage');

test(
    'CT007 - Buscar produto',
    async ({ page }) => {

        const homePage =
            new HomePage(page);

        const productsPage =
            new ProductsPage(page);

        await homePage.acessarSite();

        await productsPage
            .acessarProdutos();

        await productsPage
            .pesquisarProduto(
                'Blue Top'
            );

        await expect(
            productsPage
                .obterProdutosEncontrados()
                .first()
        ).toContainText(
            'Blue Top'
        );
    }
);