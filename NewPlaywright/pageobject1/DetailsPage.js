class DetailsPage{
    constructor(page)
    {
        this.paage=page
        this.firstname = page.locator('[placeholder= "First Name"]')
        this.lastname= page.locator('[placeholder="Last Name"]')
        this.code = page.locator('[placeholder="Zip/Postal Code"]')
        this.continue=page.locator('#continue')
        this.finish=page.locator('#finish')
        

    }
    async personDetail()
    {
        await this.firstname.fill('Sweety')
        await this.lastname.fill('Gupta')
        await this.code.fill('121013')
    }
    async continuebutton()
    {
        await this.continue.click()
    }
    async overview()
    {
        await this.finish.click()
    }
}
module.exports={DetailsPage}