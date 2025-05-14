class LoginPage{
    constructor(page)
    {
        this.page = page
        this.logIn =page.locator('#login2')
        this.userName= page.locator('#loginusername')
        this.passWord = page.locator('#loginpassword')
        this.finalLogin = page.locator('button.btn.btn-primary[onclick="logIn()"]')


    }
    async validLogin(username,password)
    {
        await this.logIn.click()
        await this.userName.fill(username)
        await this.passWord.fill(password)
        await this.finalLogin.click()
    }
}module.exports={LoginPage}