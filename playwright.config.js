const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: '.',

    use: {

        headless: false,

        screenshot:
            'only-on-failure',

        video:
            'retain-on-failure',

        trace:
            'retain-on-failure'
    }
});