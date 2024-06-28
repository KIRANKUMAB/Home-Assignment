
module.exports = {
    user:{
     email:'kirank@demo.com',
     pwd:'kiran@2024',
     invalidemail:'kiran',
     invalidpwd:'123'
    },
   option: {
         hostname: '127.0.0.1',
         port: 4723,
         logLevel: 'info',
         capabilities: {
             'platformName': 'Android',
             'appium:platformVersion': '15',
             'appium:automationName': 'UiAutomator2',
             'appium:deviceName': 'emulator-5554',
             "appium:app":'D:\\Kiran Kumar Bagal\\NOMO Assignment Task\\Appium-Cucumber-js\\Appium-Cucumber-js\\OpenCartMobile.apk',
            //   'appium:appPackage': 'webkul.opencart.mobikul',
            //   'appium:appActivity': 'webkul.opencart_flutter.mobikul.MainActivity',
              "appium:fullReset":true,
             'appium:noReset':false,
             'appium:ignoreHiddenApiPolicyError':true,
             
         },
     }
 }