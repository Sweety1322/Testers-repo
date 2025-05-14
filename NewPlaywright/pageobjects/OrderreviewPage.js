class OrderreviewPage {
    constructor(page)
    {
        this.page= page
        this.dropdown = page.locator(".ta-results")
        this.country= page.locator("[placeholder*='Country']")
        this.submit= page.locator(".action__submit")
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted")
        this.myorders = page.locator("button[routerlink*='myorders']")

    }

    async searchcountryAndselect(countryName)
    {
        await this.country.pressSequentially("ind");
        
        await this.dropdown.waitFor();
        const optioncount = await this.dropdown.locator('button').count()
        for (let i = 0; i < optioncount; i++) {
            const text = await this.dropdown.locator("button").nth(i).textContent();
            if (text === countryName) {
                await this.dropdown.locator('button').nth(i).click()
                break;
            }
        }
    }
    async submitandgetId()
    {
        await this.submit.click();
        return await this.orderId.textContent()
        
    }

    async navigatetomyorders()
    {
        await this.myorders.click();
    }
}
module.exports={OrderreviewPage}