const { test, expect } =
    require('@playwright/test');

test(
    'API001 - Listar produtos',
    async ({ request }) => {

        const response =
            await request.get(
                'https://automationexercise.com/api/productsList'
            );

        expect(
            response.status()
        ).toBe(200);

        const body =
            await response.json();

        expect(
            body.products.length
        ).toBeGreaterThan(0);

        console.log(
            `Produtos encontrados: ${body.products.length}`
        );
    }
);