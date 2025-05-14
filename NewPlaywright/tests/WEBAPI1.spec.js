

const {test,expect,request} = require ('@playwright/test')
const {APIUTILS} = require ('../utilis/APIUTILS')
const orderpayload = {orders: [{country: "India", productOrderedId: "67a8df56c0d3e6622a297ccd"}]}
const loginpayload = {userEmail: "gsweety665@gmail.com", userPassword: "Chandan@123"}

let response;

test.beforeAll( async ()=>
{
  const apicontext = await request.newContext()
  const apiutils =  new APIUTILS(apicontext,loginpayload)
  response = await apiutils.createorder(orderpayload)
 
})

test('Shopping online' , async({page})=>
{
  await page.addInitScript(value =>{
    window.localStorage.setItem('token',value);
  },response.token)
console.log(response.token)
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");


for(let i =0; i<await rows.count(); ++i)
{
const rowOrderId =await rows.nth(i).locator("th").textContent();
if (response.orderId.includes(rowOrderId))
{
   await rows.nth(i).locator("button").first().click();
   break;
}
}
const orderIdDetails =await page.locator(".col-text").textContent();
await page.pause();
expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
  
})