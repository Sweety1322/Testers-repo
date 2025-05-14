class APIUTILS {
    constructor(apicontext,loginpayload)
    {
        this.apicontext = apicontext
        this.loginpayload = loginpayload

    }

    async getToken()
    {
        const loginresponse = await this.apicontext.post ('https://rahulshettyacademy.com/api/ecom/auth/login',
            {
                data : this.loginpayload
            }
        )
        const loginresponsejson = await loginresponse.json()
        const token = loginresponsejson.token
        console.log (token)
        return token;
    }
    async createorder(orderpayload)
    {
        let response = {}
        response.token = await this.getToken()
        const orderresponse = await this.apicontext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
            {
              data : orderpayload, 
              headers : {
                'Authorization': response.token,
                'Content-Type' : 'application/json'
              },
            }
          )
          const orderresponsejson= await orderresponse.json()
          console.log(orderresponsejson)
          const orderId = orderresponsejson.orders[0]
          console.log(orderId)
          response.orderId = orderId
          return response;
    }
    
}
module.exports ={APIUTILS}