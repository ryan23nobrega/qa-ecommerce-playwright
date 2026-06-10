class CartPage {

    constructor(page) {

        this.page = page;

        this.productName =
            '.cart_description h4 a';

        this.productPrice =
            '.cart_price p';

        this.productQuantity =
            '.cart_quantity button';
    }

    obterNomeProduto() {

        return this.page.locator(
            this.productName
        );
    }

    obterPrecoProduto() {

        return this.page.locator(
            this.productPrice
        );
    }

    obterQuantidadeProduto() {

        return this.page.locator(
            this.productQuantity
        );
    }
}

module.exports =
    CartPage;