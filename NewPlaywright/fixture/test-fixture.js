const base = require('@playwright/test')
const {LoginPage} = require('../pages/LoginPage')
const {CartPage} = require('../pages/CartPage')



const test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

module.exports = { test, expect: base.expect };
