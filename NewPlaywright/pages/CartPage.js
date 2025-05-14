class CartPage{
    constructor(page)
    {
        this.page=page
        this.products=page.locator('.card-block')
        this.addCart=page.locator('.btn-lg')

    }
    async itemSelectionandView(productName)
    {
        
        const count = await this.products.count()
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("a").textContent() === productName ) {
               //add to cart
               await this.products.nth(i).locator('.hrefch').click();
               break;
            }
         }
    }
    async addtoCart()
    {
        await this.addCart.click()
    }
    async navigatetoCart()
    {
        this.page.on('dialog', async dialog =>{
            await dialog.accept()
        })
        await this.page.locator('#cartur').click()
        
    }

}
module.exports={CartPage} 