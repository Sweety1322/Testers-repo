const {test, expect} = require('../fixture/test-fixture')
const logger = require('../utilis/logger')


test('VALID LOGIN', async({loginPage})=>
{
    logger.info('Valid Login test started');
    await loginPage.page.goto('https://www.demoblaze.com/')
    await loginPage.validLogin('mom2', 'sassy')
    await expect(loginPage.page.locator('#nameofuser')).toHaveText('Welcome mom2');
    logger.info('Valid Login test passed')
})

test('INVALID LOGIN',async({loginPage})=>
{
    logger.info('Invalid Login test started');
    await loginPage.page.goto('https://www.demoblaze.com/')
    await loginPage.validLogin('mom3', 'sasy')
    logger.info('Invalid Login test passed')

})


test('Add item to cart', async ({ page, cartPage, loginPage }) => {
    logger.info('Logging in before adding item to cart');
    await page.goto('https://www.demoblaze.com/');
    await loginPage.validLogin('mom2', 'sassy'); 
    await cartPage.itemSelectionandView("Nokia lumia 1520");
    await cartPage.addtoCart();
    await cartPage.navigatetoCart();
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
    logger.info('Item successfully added to cart');
  });
  