var { Given, When, Then } = require( '@cucumber/cucumber');
const { remote } = require('webdriverio');
const { option,user } = require('../stepData/deviceCapabilities.js');
const locators = require('../objectRepository/loginPage.js');
var driver;

Given('No User Login - lanuch app', { timeout: 2 * 50000 }, async() => {
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

When('No User Login - click on profile tab', { timeout: 2 * 50000 }, async() => {
	const profile = await driver.$(locators.profile)
    await profile.click();
    console.log("click on profile tab");
});

When('No User Login - click on sign in', { timeout: 2 * 50000 }, async() => {
	const signin = await driver.$(locators.signin);
    await signin.click();
    console.log("click on signIn");
});

When('No User Login - click on sign in email', { timeout: 2 * 50000 }, async() => {
	const signinemail = await driver.$(locators.signinemail);
    await signinemail.click();
    console.log("click on sign-in email");
});

When('No User Login - Enter no username', { timeout: 2 * 50000 }, async() => {

	const username =  await driver.$(locators.email);
    await username.click();
	await username.clearValue();
    await username.setValue("");
});

When('No User Login - Enter no password', { timeout: 2 * 50000 }, async() => {
	const password =  await driver.$(locators.password);
    await password.click();
	await password.clearValue();
    await password.setValue("");
});

When('No User Login - Clik on the login button', { timeout: 2 * 50000 }, async() => {
    const signbtn = await driver.$(locators.signbtn);
    await signbtn.click();
	console.log("click on button");

});

Then('No User Login - verify username required validation', { timeout: 2 * 50000 }, async() => {
	const pwdrequire = await driver.$(locators.pwdreq);
    await pwdrequire.isDisplayed();
    const pwdinnerText = await pwdrequire.getAttribute('content-desc');
    console.log(pwdinnerText);

    const emailrequire = await driver.$(locators.emailreq);
    await emailrequire.isDisplayed();
    const emailinnerText = await emailrequire.getAttribute('content-desc');
    console.log(emailinnerText);
});
