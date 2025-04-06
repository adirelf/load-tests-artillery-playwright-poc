const { chromium } = require('playwright');

async function playwrightScript(context, events, done) {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    console.log('starting test');
    await page.goto('http://saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForSelector('.header_label');

    await browser.close();

  }
module.exports = {
    playwrightScript
};

//playwrightScript().then(()=> console.log('Done')).catch(err=> console.error('error' , err))
