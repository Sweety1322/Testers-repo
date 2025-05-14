const {test} = require ('@playwright/test')
const {customtest} = require('../utilis/customtest')
const {POManager} = require('../pageobject1/POManager')
//JSON-->STRING --> OBJECT
const dataset=JSON.parse(JSON.stringify(require('../utilis/TestData1.json')))


for (const data of dataset)
{
test(`Shopping for ${data.productName}`, async ({page})=>
{

  const pomanager = new POManager(page)

  const loginpage = pomanager.getLoginPage()
  await loginpage.goToWebsite()
  await loginpage.verifyTitle()
  await loginpage.validLogin(data.userName,data.passWord)

  const dashboardpage= pomanager.getDashboardPage()
  await dashboardpage.allItem()
  await dashboardpage.addtoCart(data.productName)
  await dashboardpage.navigatetoCart()

  const cartpage = pomanager.getCartPage()
  await cartpage.Checkout()

  const detailspage= pomanager.getDetailsPage()
  await detailspage.personDetail()
  await detailspage.continuebutton()
  await detailspage.overview()

   
  await page.pause()
})
}


customtest('Shopping ', async ({page,testData})=>
  {
  
    const pomanager = new POManager(page)
  
    const loginpage = pomanager.getLoginPage()
    await loginpage.goToWebsite()
    await loginpage.verifyTitle()
    await loginpage.validLogin(testData.userName,testData.passWord)
  
    const dashboardpage= pomanager.getDashboardPage()
    await dashboardpage.allItem()
    await dashboardpage.addtoCart(testData.productName)
    await dashboardpage.navigatetoCart()
  
    const cartpage = pomanager.getCartPage()
    await cartpage.Checkout()
  
    const detailspage= pomanager.getDetailsPage()
    await detailspage.personDetail()
    await detailspage.continuebutton()
    await detailspage.overview()

  })
