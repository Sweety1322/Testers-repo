const {test,expect,request} = require ('@playwright/test')
const orderpayload = {orders: [{country: "India", productOrderedId: "67a8df56c0d3e6622a297ccd"}]}
const loginpayload = {userEmail: "gsweety665@gmail.com", userPassword: "Chandan@123"}

let token;
let orderId;

test.beforeAll( async ()=>
{
  const apicontext = await request.newContext()
  const loginresponse = await apicontext.post ('https://rahulshettyacademy.com/api/ecom/auth/login',
    {
        data : loginpayload
    }
)
const loginresponsejson = await loginresponse.json()
token = loginresponsejson.token
console.log (token)

const orderresponse = await apicontext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
  {
    data : orderpayload,
    headers : {
      'Authorization': token,
      'Content-Type' : 'application/json'
    },
  }
)
const orderresponsejson= await orderresponse.json()
console.log(orderresponsejson)
orderId = orderresponsejson.orders[0]
console.log(orderId)
})

test('Shopping online' , async({page})=>
{
  await page.addInitScript(value =>{
    window.localStorage.setItem('token',value);
  },token)
console.log(token)
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");


for(let i =0; i<await rows.count(); ++i)
{
const rowOrderId =await rows.nth(i).locator("th").textContent();
if (orderId.includes(rowOrderId))
{
   await rows.nth(i).locator("button").first().click();
   break;
}
}
const orderIdDetails =await page.locator(".col-text").textContent();
await page.pause();
//expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
  
})






