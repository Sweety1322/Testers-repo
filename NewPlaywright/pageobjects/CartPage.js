const {test, expect} = require('@playwright/test');
class CartPage {
    constructor(page)
    {
        this.page=page
        this.cartproduct = page.locator("div li").first()
        this.producttext= page.locator('.card-body b')
        this.orders = page.locator("button[routerlink*='myorders']")
        this.cart = page.locator("[routerlink*='cart")
        this.checkout= page.locator("text=Checkout")
    }
    async Verifyproduct(productName)
    {
        await this.cartproduct.waitFor();
        const bool= await this.getproductlocator(productName).isVisible()
        expect(bool).toBeTruthy()
    }

    async Checkout()
    {
        await this.checkout.click()
    }

    getproductlocator(productName)
    {
        return this.page.locator("h3:has-text('"+productName+"')")
    }
}

module.exports= {CartPage}