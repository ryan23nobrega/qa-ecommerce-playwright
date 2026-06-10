class ProductsPage {

    constructor(page) {

        this.page = page;

        this.productsMenu =
            'a[href="/products"]';

        this.searchField =
            '#search_product';

        this.searchButton =
            '#submit_search';

        this.productTitles =
            '.productinfo p';

        this.addToCartButton =
            'a[data-product-id="1"]';

        this.viewCartButton =
            'u';
    }

    async acessarProdutos() {

        await this.page.click(
            this.productsMenu
        );
    }

    async pesquisarProduto(nomeProduto) {

        await this.page.fill(
            this.searchField,
            nomeProduto
        );

        await this.page.click(
            this.searchButton
        );
    }

    obterProdutosEncontrados() {

        return this.page.locator(
            this.productTitles
        );
    }

    async adicionarPrimeiroProdutoAoCarrinho() {

        await this.page.click(
            this.addToCartButton
        );
    }

    async visualizarCarrinho() {

        await this.page.click(
            this.viewCartButton
        );
    }
}

module.exports =
    ProductsPage;