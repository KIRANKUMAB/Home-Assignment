var { Given, When, Then } = require( '@cucumber/cucumber');
const { remote } = require('webdriverio');
const { option,user } = require('../stepData/deviceCapabilities.js');
const locators = require('../objectRepository/loginPage.js');
var driver;

Given('Standard Login - lanuch app', { timeout: 2 * 60000 }, async() => {
    console.log("Mobile is connected with local System: APPIUM ")
    driver = await remote(option);
    try {
        await driver.waitUntil(async () => {
            const skipbtn = await driver.$(locators.skipbtn);
            await skipbtn.click();
        });

      }
      catch(err){
      }
});

When('Standard Login - click on profile tab', { timeout: 2 * 60000 }, async() => {
    const profile = await driver.$(locators.profile)
    await profile.click();
    console.log("click on profile tab");
});

When('Standard Login - click on sign in', { timeout: 2 * 50000 }, async() => {
    const signin = await driver.$(locators.signin);
    await signin.click();
    console.log("click on signIn");
});

When('Standard Login - click on sign in email', { timeout: 2 * 50000 }, async() => {
    const signinemail = await driver.$(locators.signinemail);
    await signinemail.click();
    console.log("click on sign-in email");
});

When('Standard Login - Enter username {string}', { timeout: 2 * 50000 }, async(email) => {
    try {
        const username =  await driver.$(locators.email);
        await username.click()
        await username.clearValue();
        await username.setValue(email);
    } catch(err){
            throw err
        }
});

When('Standard Login - Enter password {string}', { timeout: 2 * 50000 }, async(password) => {
    try{
        const pwd =  await driver.$(locators.password);
        await pwd.click()
        await pwd.clearValue();
        await pwd.setValue(password);
    }catch(err){
        throw err
    }
});

When('Standard Login - Clik on the login button', { timeout: 2 * 50000 }, async() => {
    const signbtn = await driver.$(locators.signbtn);
    await signbtn.click();
    console.log("click on button");

});

Then('Standard Login - verify dashboard display', { timeout: 2 * 50000 }, async() => {
    console.log("click on button");
    const signbtn = await driver.$(locators.vtext);
    await signbtn.isDisplayed();
    const profile = await driver.$(locators.profile)
    await profile.click();
    const dashboard = await driver.$(locators.dashboard);
    await dashboard.isDisplayed();
    
});
