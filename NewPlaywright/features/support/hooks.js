const {POOManager} = require('../../pageobjects/POOManager')
const playwright = require('@playwright/test')
const { Before, After, BeforeStep,AfterStep,Status } = require('@cucumber/cucumber')



Before( async function () {
    const browser = await playwright.chromium.launch({headless: false})  
    const context= await browser.newContext();
    this.page = await context.newPage();
    this.poomanager = new POOManager(this.page)
})

After(async function () {
    console.log("I am the last to execute")
})

BeforeStep( function (){

})

AfterStep(async function({result}) {
    if(result.status === Status.FAILED) {
        await this.page.screenshot({path: "screenshothook.png"})
    }

})