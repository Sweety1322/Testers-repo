// @ts-check
const {  devices } = require('@playwright/test')
const config = {
  testDir: './tests',
  retries :0,
  workers :2,


  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: [['list'],
  ['html'],
  ['allure-playwright',{outputFolder: 'allure-results'}]],

  use: {
    browserName : 'chromium',
    headless : true,
    screenshot : 'on', 
    trace : 'on',
  }
} 

module.exports = config;

