
const { Given, When, Then } = require('@cucumber/cucumber')
//const {POOManager} = require('../../pageobjects/POOManager')
const {expect} = require('@playwright/test')
//const playwright = require('@playwright/test')
 


Given('a login to Ecommerce application with {string} and {string}',{timeout : 100*1000},  async function (email, password) {
    
    const loginpage = this.poomanager.getLoginpage()
    await loginpage.goTo()
    await loginpage.validlogin(email,password)                                                                                           
    
  });

When('Add {string} to cart.', async function (productName) {
    const dashboardpage = this.poomanager.getDashboardpage()
    await dashboardpage.searchproduct(productName)
    await dashboardpage.navigatetocart()
    
  });
  
Then('Verify {string} is displayed in the cart.', async function (productName) {
    const cartpage= this.poomanager.getCartpage()
    await cartpage.Verifyproduct(productName)
    await cartpage.Checkout()
    
  });  

  When('Enter the valid detail {string} and place the order.', async function (countryName) {
    const orderreviewpage = this.poomanager.getOrderreviewpage()
    await orderreviewpage.searchcountryAndselect(countryName)
    this.orderId = await orderreviewpage.submitandgetId()
    console.log(this.orderId)
    await orderreviewpage.navigatetomyorders()
    
  });
  
Then('Verify order is present in the orderhistory page.',async  function () {
    const orderhistorypage = this.poomanager.getOrderhistorypage()
    await orderhistorypage.searchorder(this.orderId)
    expect(this.orderId.includes(await orderhistorypage.getorderId())).toBeTruthy();
  }); 





  Given('a login to Ecommerce2 application with {string} and {string}', async function (email, password) {
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title())
    await this.page.locator('#username').fill(email);
    await this.page.locator("[type='password']").fill(password)
    await this.page.locator('#signInBtn').click()
    
  })

  Then('Verify Error message is displayed', async function () {
    console.log(await this.page.locator("[style*='block']").textContent())
    await expect(this.page.locator("[style*='block']")).toContainText('Incorrect')
    
  });






