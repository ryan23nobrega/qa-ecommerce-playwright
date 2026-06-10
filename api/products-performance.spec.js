const { test, expect } =
    require('@playwright/test');

test(
    'API003 - Validar tempo de resposta',
    async ({ request }) => {

        const inicio =
            Date.now();

        const response =
            await request.get(
                'https://automationexercise.com/api/productsList'
            );

        const tempo =
            Date.now() - inicio;

        expect(
            response.status()
        ).toBe(200);

        expect(
            tempo
        ).toBeLessThan(5000);

        console.log(
            `Tempo resposta: ${tempo} ms`
        );
    }
);