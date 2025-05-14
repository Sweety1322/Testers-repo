
const { Given, When, Then } = require('@cucumber/cucumber');
const {expect} = require('@playwright/test')



  Given('a login to the site with {string} and {string}',async function (username, password) {
    await this.page.goto('https://www.demoblaze.com/')
     await this.page.locator('#login2').click()
     await this.page.locator('#loginusername').fill(username)
     await this.page.locator('#loginpassword').fill(password)
     await this.page.locator('button.btn.btn-primary[onclick="logIn()"]').click()
    
  });


  When('search for the product {string}',{timeout : 100*1000}, async function (productName) {
    await this.page.locator('a:has-text("Laptops")').click()
    this.productDescription = await this.page.locator(`.card-block:has(h4.card-title a:has-text("${productName}")) >> p#article`).textContent()
    await this.page.locator(`.card-block h4.card-title a:has-text("${productName}")`).click()  
  });

  Then('add to cart.', async function () {
    this.page.on('dialog', async dialog =>{
      await dialog.accept()
    }) 
    const text = await this.page.locator('#more-information p').textContent()
    expect (await text === this.productDescription)    
    await this.page.locator('.btn-lg').click()
    await this.page.locator('#cartur').click()
    
  })
  
  Then('item added to cart  place the order', async function () {
    
    await this.page.locator(".btn-success").click()
    await this.page.locator('#name').fill("Sweety")
    await this.page.locator('#card').fill('12345')
    await this.page.locator("text= Purchase").click()
    await this.page.locator('.confirm').click() 
  });