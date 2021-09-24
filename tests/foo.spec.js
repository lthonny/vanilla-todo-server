// e2e testing
// ......................
// get all elements to work
// generate browser for tests
// 
//


const { test, expect, chromium } = require('@playwright/test');

// test('basic test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const title = page.locator('.navbar__inner .navbar__title');
//   await expect(title).toHaveText('Playwright');
// });


// const playwright = require('playwright');

(async () => {

    const browser = await chromium.launch();
})