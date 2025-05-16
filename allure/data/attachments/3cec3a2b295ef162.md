# Test info

- Name: Add item to cart
- Location: C:\Users\Sweety\NewPlaywright\tests\fixture-test.spec.js:24:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.btn-lg')
    - waiting for" https://www.demoblaze.com/" navigation to finish...
    - navigated to "https://www.demoblaze.com/"

    at CartPage.addtoCart (C:\Users\Sweety\NewPlaywright\pages\CartPage.js:23:28)
    at C:\Users\Sweety\NewPlaywright\tests\fixture-test.spec.js:29:20
```

# Test source

```ts
   1 | class CartPage{
   2 |     constructor(page)
   3 |     {
   4 |         this.page=page
   5 |         this.products=page.locator('.card-block')
   6 |         this.addCart=page.locator('.btn-lg')
   7 |
   8 |     }
   9 |     async itemSelectionandView(productName)
  10 |     {
  11 |         
  12 |         const count = await this.products.count()
  13 |         for (let i = 0; i < count; ++i) {
  14 |             if (await this.products.nth(i).locator("a").textContent() === productName ) {
  15 |                //add to cart
  16 |                await this.products.nth(i).locator('.hrefch').click();
  17 |                break;
  18 |             }
  19 |          }
  20 |     }
  21 |     async addtoCart()
  22 |     {
> 23 |         await this.addCart.click()
     |                            ^ Error: locator.click: Target page, context or browser has been closed
  24 |     }
  25 |     async navigatetoCart()
  26 |     {
  27 |         this.page.on('dialog', async dialog =>{
  28 |             await dialog.accept()
  29 |         })
  30 |         await this.page.locator('#cartur').click()
  31 |         
  32 |     }
  33 |
  34 | }
  35 | module.exports={CartPage} 
```