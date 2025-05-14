class LoginPage {
    constructor(page)
    {
        this.page = page
        this.username=page.locator('#user-name')
        this.password=page.locator('#password')
        this.login=page.locator('[type="submit"]')

    }
    async goToWebsite()
    {
        await this.page.goto('https://www.saucedemo.com/')

    }
    async verifyTitle()
    {
        const titlE =await this.page.title()
        console.log('Page title is ', titlE)
    }
    async validLogin(userName,passWord)
    {
        await this.username.fill(userName)
        await this.password.fill(passWord)
        await this.login.click()

    }
}
module.exports={LoginPage}