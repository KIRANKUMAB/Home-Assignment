# Nomo-Assignment
Mobile automation of android application using JavaScript, WebDriver IO and Appium.

Basic Test for Mobile Automation using Cucumber and Appium with WebDriver IO and JavaScript as programming language and Visual Studio Code as IDE

Steps to run demo test
Clone this git repository

git clone

Start Appium Server using Appium Desktop installed in your PC. The project expects the Appium Server to run on localhost:4723. If you run the server to different host and port. Please change the code.

Download the application from feature\app\OpenCartMobile.apk

change the path into deviceCapabilities : "appium:app" : "your app path"

Modify following variables in the code if necessary:

             'platformName': '****',
             'appium:platformVersion': '****',

run npm install to download required node_modules  in order to run with appium project.

Appium server start from: your_workspace\node_modules\@appium

open androd emulator or connect real time device to run the script.

To run script:

run "npm run test" from "your_workspace"

