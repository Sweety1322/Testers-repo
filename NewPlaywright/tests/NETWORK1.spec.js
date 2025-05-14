const {test,request} = require('@playwright/test')
const {APIUTILS} =require('../utilis/APIUTILS')
const orderpayload = {orders: [{country: "India", productOrderedId: "67a8df56c0d3e6622a297ccd"}]}
const loginpayload = {userEmail: "gsweety665@gmail.com", userPassword: "Chandan@123"}
const fakePayLoadOrders = { data: [], message: "No Orders" };

let response;

test.beforeAll(async()=>
{
 const apicontext = await request.newContext()
 const apiutils = new APIUTILS(apicontext,loginpayload)
 response= await apiutils.createorder(orderpayload)
})

test('NETWORK1', async ({page})=>
{
    await page.addInitScript(value=>
    {
        window.localStorage.setItem('token',value)
    },response.token)
    await page.goto('https://rahulshettyacademy.com/client')
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route =>{
            const response = await page.request.fetch(route.request());
            const body = JSON.stringify(fakePayLoadOrders)
            route.fulfill(
                {
                    response,
                    body,
                }
            )
        }
    )
    
    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")

    console.log(await page.locator(".mt-4").textContent());
    
})