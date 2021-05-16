const { Given, When, Then, After } = require('cucumber');
const { expect } = require('chai');
const { login } = require('../common/common-steps');
const staffPage = require('../../../page-objects/staff-page');
const MainPage = require('../../../page-objects/main-page');


Given('I login with my user and password', () => {
    login();
    MainPage.getProfileButton().click();
    const myProfileBtn = MainPage.getYourProfileLink();
    myProfileBtn.waitForDisplayed(2000);
    myProfileBtn.click();
    browser.pause(2000);
    
  });
  
 
  When(/^I fill the (.*)$/, (new_user_name) => {
    staffPage.getTxtNewName().setValue(new_user_name || '');
  });
  
  
  Then('I expect save new name', () => {
$('button.gh-btn-blue').click();
  });
  

  