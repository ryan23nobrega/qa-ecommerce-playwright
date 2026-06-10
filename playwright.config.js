const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: '.',

    reporter: [
        ['html'],
        ['list']
    ],

    use: {
        headless: true,

        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
    },

    timeout: 60000
});