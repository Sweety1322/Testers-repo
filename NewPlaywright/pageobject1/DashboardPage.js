class DashboardPage{
    constructor(page)
    {
        this.page=page
        this.product = page.locator('.inventory_item_description')
        this.cart=page.locator('.shopping_cart_container')

    }
    async allItem()
    {
        console.log(await this.page.locator('.inventory_item_name').allTextContents())
    }
    async addtoCart(productName)
    {
        //const product = page.locator('.inventory_item_description')
        const count= await this.product.count()
        for(let i =0; i< count; i++){
          if(await this.product.nth(i).locator('.inventory_item_name').textContent() === productName){
             await this.product.nth(i).locator('button:has-text("Add to cart")').click()
             break;
           }
        }

    }
    async navigatetoCart()
    {
        await this.cart.click()
    }
}
module.exports={DashboardPage}