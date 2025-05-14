const { test, expect } = require('@playwright/test')
const {LoginPage} = require('../pageobjects/LoginPage')
const {DashboardPage} = require('../pageobjects/DashboardPage')
const {CartPage} = require('../pageobjects/CartPage')
const {OrderreviewPage} = require('../pageobjects/OrderreviewPage')
const { OrderhistoryPage } = require('../pageobjects/OrderhistoryPage')

test('rahul shetty', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client')
    const email= "gsweety665@gmail.com"
    const password = "Chandan@123"
    const productName = 'ADIDAS ORIGINAL'
    const countryName= " India"

    const loginpage = new LoginPage(page)
    await loginpage.goTo()
    await loginpage.validlogin(email,password)

    const dashboardpage = new DashboardPage(page)
    await dashboardpage.searchproduct(productName)
    await dashboardpage.navigatetocart()

    const cartpage= new CartPage(page)
    await cartpage.Verifyproduct(productName)
    await cartpage.Checkout()

    const orderreviewpage = new OrderreviewPage(page)
    await orderreviewpage.searchcountryAndselect(countryName)
    const orderId = await orderreviewpage.submitandgetId()
    console.log(orderId)
    await orderreviewpage.navigatetomyorders()

    const orderhistorypage = new OrderhistoryPage(page)
    await orderhistorypage.searchorder(orderId)

    expect(orderId.includes(await orderhistorypage.getorderId())).toBeTruthy();
    await page.pause()

})