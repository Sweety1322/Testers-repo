
const {LoginPage} = require('../pageobjects/LoginPage')
const {DashboardPage} = require('../pageobjects/DashboardPage')
const {CartPage} = require('../pageobjects/CartPage')
const {OrderreviewPage} = require('../pageobjects/OrderreviewPage')
const { OrderhistoryPage } = require('../pageobjects/OrderhistoryPage')

class POOManager {
    constructor(page)
    {
        this.page= page
        this.loginpage = new LoginPage(this.page)
        this.dashboardpage = new DashboardPage(this.page)
        this.cartpage = new CartPage(this.page)
        this.orderreviewpage =  new OrderreviewPage(this.page)
        this.orderhistorypage = new OrderhistoryPage(this.page) 

    }
    getLoginpage()
    {
        return this.loginpage
    }
    getDashboardpage()
    {
        return this.dashboardpage
    }
    getCartpage()
    {
        return this.cartpage
    }
    getOrderreviewpage()
    {
        return this.orderreviewpage
    }
    getOrderhistorypage()
    {
        return this.orderhistorypage
    }
}
module.exports={POOManager}