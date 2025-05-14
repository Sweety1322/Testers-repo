const {LoginPage}= require('../pageobject1/LoginPage')
const {DashboardPage} = require('../pageobject1/DashboardPage')
const {CartPage} = require('../pageobject1/CartPage')
const {DetailsPage} = require('../pageobject1/DetailsPage')


class POManager{
    constructor(page)
    {
        this.page=page
        this.loginpage = new LoginPage(this.page)
        this.dashboardpage= new DashboardPage(this.page)
        this.cartpage = new CartPage(this.page)
        this.detailspage= new DetailsPage(this.page)
    }
    getLoginPage()
    {
        return this.loginpage
    }
    getDashboardPage()
    {
        return this.dashboardpage
    }
     getCartPage()
    {
        return this.cartpage
    }
    getDetailsPage()
    {
        return this.detailspage
    }
}
module.exports={POManager}