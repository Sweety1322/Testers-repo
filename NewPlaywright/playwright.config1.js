const {  devices } = require('@playwright/test')
const config = {
  testDir: './tests',
  retries :1,
  workers: 1,


  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',
  projects : [
    {
        name : 'safari',
        use: {
          browserName : 'webkit',
          headless : false,
          screenshot : 'off',
          trace : 'off',
          ...devices['Galaxy Note 3'],
          ignoreHttpsErrors : true,
        }
    },
    {
        name : 'chromium',
        use : {
            browserName : 'chromium',
            headless : false,
            screenshot : 'off',
            trace : 'on',
            video : 'retain-on-failure',
            viewport : {width:720,height:720},
            permission : ['geolocation']
        }
    } 
 ]
}

module.exports = config;
