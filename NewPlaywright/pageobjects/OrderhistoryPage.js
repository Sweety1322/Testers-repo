class OrderhistoryPage {
    constructor(page)
    {
        this.page = page
        this.ordersTable = page.locator("tbody")
        this.rows= page.locator("tbody tr")
        this.orderiddetails = page.locator(".col-text")
    }
    async searchorder(orderId)
    {
        await this.ordersTable.waitFor();
        for (let i = 0; i < await this.rows.count(); ++i) {
            const rowOrderId = await this.rows.nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderId)) {
                await this.rows.nth(i).locator("button").first().click();
                break;
            }
        }
    }
    async getorderId()
    {
        return await this.orderiddetails.textContent()
    }
}

module.exports={OrderhistoryPage}