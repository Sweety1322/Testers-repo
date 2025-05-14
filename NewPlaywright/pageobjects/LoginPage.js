class LoginPage{
    constructor (page)
    {
      this.page = page
      this.signinbutton = page.locator("[value='Login']")
      this.useremail = page.locator("#userEmail")
      this.userpassword= page.locator("#userPassword")
    }

    async goTo()
    {
        await this.page.goto('https://rahulshettyacademy.com/client')
    }

    async validlogin(email,password)
    {
        await this.useremail.fill(email);
        await this.userpassword.fill(password);
        await this.signinbutton.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports={LoginPage}