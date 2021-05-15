const { Given, When, Then, After } = require('cucumber');
const { expect } = require('chai');
const { logout, login } = require('../common/common-steps');
const MainPage = require('../../../page-objects/main-page');
const profilePage = require('../../../page-objects/profile-page');


Given('I login with my user and password', () => {
  login();
});

Given('go to my profile page', () => {
  MainPage.getProfileButton().click();
  const myProfileBtn = MainPage.getYourProfileLink();
  myProfileBtn.waitForDisplayed(2000);
  myProfileBtn.click();
  browser.pause(2000);
});

When(/^I fill the (.*), (.*) and (.*)$/, (old_pass, new_pass, verify_pass) => {
  profilePage.getTxtPassOld().setValue(old_pass || '');
  profilePage.getTxtPassNew().setValue(new_pass || '');
  profilePage.getTxtPassNewVerification().setValue(verify_pass || '');
});

When('try to update my password', () => {
  const btn = profilePage.getBtnChangePassword();
  btn.click();
  browser.pause(1000);
});

Then(/^I expect to see \((.*)\) and \((.*)\) messages$/, (old_pass_err, new_pass_err) => {
  const responseOldPass = profilePage.getResponseOldPass();
  responseOldPass.waitForDisplayed(5000);
  const msg = responseOldPass.getText();
  expect(msg.trim()).to.eq(old_pass_err.trim());

  const responseNewPass = profilePage.getResponseNewPass();
  responseNewPass.waitForDisplayed(5000);
  const msg2 = responseNewPass.getText();
  expect(msg2.trim()).to.eq(new_pass_err.trim());
});

Then(/^I expect to see (.*) in the verify pass field$/, (verify_pass_err) => {
  const responseVerifyPass = profilePage.getResponseNewPassVerif();
  responseVerifyPass.waitForDisplayed(5000);
  const msg = responseVerifyPass.getText();
  expect(msg.trim()).to.eq(verify_pass_err.trim());
});

Then(/^I expect to see (.*), in the old pass field$/, (old_pass_err) => {
  const responseOldPass = profilePage.getResponseOldPass();
  responseOldPass.waitForDisplayed(5000);
  const msg = responseOldPass.getText();
  expect(msg.trim()).to.eq(old_pass_err.trim());
});

Then(/^I expect to see (.*) in the new pass field$/, (new_pass_err) => {
  const responseNewPass = profilePage.getResponseNewPass();
  responseNewPass.waitForDisplayed(5000);
  const msg = responseNewPass.getText();
  expect(msg.trim()).to.eq(new_pass_err.trim());
});

Then(/^I expect to see (.*) in the verify pass field$/, (verify_pass_err) => {
  const responseVerifyPass = profilePage.getResponseNewPassVerif();
  responseVerifyPass.waitForDisplayed(5000);
  const msg = responseVerifyPass.getText();
  expect(msg.trim()).to.eq(verify_pass_err.trim());
});

After(() => {
  logout();
});