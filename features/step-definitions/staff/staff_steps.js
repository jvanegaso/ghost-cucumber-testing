const { Given, When, Then, After } = require('cucumber');
const { expect } = require('chai');
const { login } = require('../common/common-steps');
const MainPage = require('../../../page-objects/main-page');
const staffPage = require('../../../page-objects/staff-page');



Given('I login with my user and password', () => {
  login();
});

Given('go to staff user page', () => {
  MainPage.getProfileButton().click();
  const myProfileBtn = MainPage.getYourProfileLink();
  myProfileBtn.waitForDisplayed(2000);
  myProfileBtn.click();
  browser.pause(2000);
});

When(/^I fill the (.*), (.*) and (.*)$/, (new_user_email) => {
  find('Invite people').click;
  staffPage.getTxtNewUserEmail().setValue(new_user_email || '');
});

When('try to insert user email', () => {
  const btn = staffPage.getBtnSendInvitation();
  btn.click();
  browser.pause(1000);
});

Then(/^I expect to see \((.*)\) and \((.*)\) messages$/, (new_user_email_err) => {
  const responseNewUserEmail = staffPage.getTxtNewUserEmailResponse();
  responseNewUserEmail.waitForDisplayed(5000);
  const msg = responseNewUserEmail.getText();
  expect(msg.trim()).to.eq(new_user_email_err.trim());

});

