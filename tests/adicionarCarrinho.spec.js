const { test, expect } = require('@playwright/test');

const HomePage =
    require('../pages/HomePage');

const ProductsPage =
    require('../pages/ProductsPage');

test(
    'CT008 - Adicionar produto ao carrinho',
    async ({ page }) => {

        const homePage =
            new HomePage(page);

        const productsPage =
            new ProductsPage(page);

        await homePage.acessarSite();

        await productsPage
            .acessarProdutos();

        await productsPage
            .adicionarPrimeiroProdutoAoCarrinho();

        await productsPage
            .visualizarCarrinho();

        await expect(page)
            .toHaveURL(/view_cart/);
    }
);