var { Given, When, Then } = require( '@cucumber/cucumber');
const { remote } = require('webdriverio');
const { option,user } = require('../stepData/deviceCapabilities.js');
const locators = require('../objectRepository/loginPage.js');
var driver;

Given('No match Login - lanuch app', { timeout: 2 * 90000 }, async() => {
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

When('No match Login - click on profile tab', { timeout: 2 * 90000 }, async() => {
	const profile = await driver.$(locators.profile)
    await profile.click();
    console.log("click on profile tab");
});

When('No match Login - click on sign in', { timeout: 2 * 90000 }, async() => {
	const signin = await driver.$(locators.signin);
    await signin.click();
    console.log("click on signIn");
});

When('No match Login - click on sign in email', { timeout: 2 * 90000 }, async() => {
	const signinemail = await driver.$(locators.signinemail);
    await signinemail.click();
    console.log("click on sign-in email");
});

When('No match Login - Enter invalid username', { timeout: 2 * 90000 }, async() => {
	const username =  await driver.$(locators.email);
	await username.click();
    await username.clearValue();
	await username.setValue(user.invalidemail);
});

When('No match Login - Enter invalid password.', { timeout: 2 * 90000 }, async() => {
	const password =  await driver.$(locators.password);
    await password.click()
    await password.clearValue();
    await password.setValue(user.invalidpwd);
});

When('No match Login - Clik on the login button', { timeout: 2 * 90000 }, async() => {
	const signbtn = await driver.$(locators.signbtn);
    await signbtn.click();
    console.log("click on button");
});

When('No match Login - validate invalid email', { timeout: 2 * 90000 }, async() => {
	const validemail = await driver.$(locators.validemail);
    await validemail.isDisplayed();
    const innerText = await validemail.getAttribute('content-desc');
    console.log(innerText);
});

Then('No match Login - validate invalid password', { timeout: 2 * 90000 }, async() => {
	const validpwd = await driver.$(locators.validpwd);
    await validpwd.isDisplayed();
    const innerText = await validpwd.getAttribute('content-desc');
    console.log(innerText);

});
