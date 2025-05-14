
const { test, expect } = require('@playwright/test')
const {POOManager} = require('../pageobjects/POOManager')

test('rahul shetty', async ({ page }) => {
    const poomanager = new POOManager(page)
    //const { loginpage, dashboardpage, cartpage, orderreviewpage, orderhistorypage} =  poomanager
    await page.goto('https://rahulshettyacademy.com/client')
    const email= "gsweety665@gmail.com"
    const password = "Chandan@123"
    const productName = 'ADIDAS ORIGINAL'
    const countryName= " India"

    const loginpage = poomanager.getLoginpage()
    await loginpage.goTo()
    await loginpage.validlogin(email,password)

    const dashboardpage = poomanager.getDashboardpage()
    await dashboardpage.searchproduct(productName)
    await dashboardpage.navigatetocart()

    const cartpage= poomanager.getCartpage()
    await cartpage.Verifyproduct(productName)
    await cartpage.Checkout()

    const orderreviewpage = poomanager.getOrderreviewpage()
    await orderreviewpage.searchcountryAndselect(countryName)
    const orderId = await orderreviewpage.submitandgetId()
    console.log(orderId)
    await orderreviewpage.navigatetomyorders()

    const orderhistorypage = poomanager.getOrderhistorypage()
    await orderhistorypage.searchorder(orderId)

    expect(orderId.includes(await orderhistorypage.getorderId())).toBeTruthy();
    await page.pause()

})

/* if i dont want to create object for the loginpage , dashboardpage i mean like
const loginpage = poomanager.getLoginpage()
const cartpage= poomanager.getCartpage()
const dashboardpage = poomanager.getDashboardpage()
const orderreviewpage = poomanager.getOrderreviewpage()
const orderhistorypage = poomanager.getOrderhistorypage()

then i can just comment these lines and write a simple line under test which is
const { loginpage, dashboardpage, cartpage, orderreviewpage, orderhistorypage} =  poomanager

and after this from poomanager i have to comment out get loginpage and other pages 
 getLoginpage()
    {
        return this.loginpage
    }
    getDashboardpage()
    {
        return this.dashboardpage
    }
    getCartpage()
    {
        return this.cartpage
    }
    getOrderreviewpage()
    {
        return this.orderreviewpage
    }
    getOrderhistorypage()
    {
        return this.orderhistorypage
    }
        i have to comment out these and then my test will run smoother*/
