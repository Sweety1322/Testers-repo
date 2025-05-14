const base = require ('@playwright/test')

exports.customtest= base.test.extend(
    {
    testData : {   
      userName : "standard_user",
      passWord : "secret_sauce",
      productName : "Sauce Labs Bike Light"
    }
    }
)