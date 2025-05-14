class DashboardPage {
    constructor(page)
    {
        this.page=page
        this.producttext = page.locator('.card-body b')
        this.products = page.locator('.card-body')
        this.cart = page.locator("[routerlink*='cart']")
    }
    async searchproduct(productName)
    {
        const titles = await this.producttext.allTextContents();
        console.log(titles); 
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
          if (await this.products.nth(i).locator("b").textContent() === productName) {
          //add to cart
            await this.products.nth(i).locator("text= Add To Cart").click();
            break;
          }
        }

    }
    async navigatetocart()
    {
        await this.cart.click();
    }
}
module.exports={DashboardPage}