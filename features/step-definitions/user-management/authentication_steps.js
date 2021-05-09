const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const loginPage = require('../../../page-objects/login-page');
const MainPage = require('../../../page-objects/main-page');

const { usuario, clave } = require('../../../config');

Given('I go to ghost login screen', () => {
  browser.url('#/signin');
});

When(/^I fill a (.*) and (.*)$/, (email, password) => {
  const txtMail = loginPage.getUserInput();
  txtMail.click();
  txtMail.setValue(email);

  const txtPass = loginPage.getPasswordInput();
  txtPass.click();
  txtPass.setValue(password);
});

When('I try to login', () => {
  loginPage.getLoginButton().click();
});

When('I click on Forgot password button', () => {
  loginPage.getForgotButton().click();
});

When('I fill right user and password', () => {
  const txtMail = loginPage.getUserInput();
  txtMail.click();
  txtMail.setValue(usuario);

  const txtPass = loginPage.getPasswordInput();
  txtPass.click();
  txtPass.setValue(clave);
});

When('I logout from the page', () => {
  logout();
});

When('I try to go to site page', () => {
  browser.url('#/site');
  browser.pause(2000);
});

Then('I expect to see {string}', (error) => {
  const errorMsg = loginPage.getErrorMsg();
  errorMsg.waitForDisplayed(5000);
  const alertText = errorMsg.getText();
  expect(alertText.trim()).to.eq(error.trim());
});

Then('I expect to see the main page', () => {
  browser.pause(3000);
  expect(browser.getUrl()).to.include('/site');
  logout();
});

Then('I expect to see the login page', () => {
  expect(browser.getUrl()).to.include('#/signin');
});


const logout = () => {
  const profileBtnWrapper = MainPage.getProfileBtnWrapper();
  profileBtnWrapper.waitForDisplayed(2000);
  profileBtnWrapper.click();

  const logoutBtn = MainPage.getLogoutBtn();
  logoutBtn.waitForDisplayed(1000)
  logoutBtn.click();
  browser.pause(3000);
};