class CartPage {
    constructor(page)
    {
        this.page=page
        this.checkout= page.locator('#checkout')


    }
    async Checkout ()
    {
        await this.checkout.click()
    }
}
module.exports={CartPage}