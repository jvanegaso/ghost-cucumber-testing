const MainPage = require('../../../page-objects/main-page');
const loginPage = require('../../../page-objects/login-page');

const { usuario, clave } = require('../../../config');

function login() {
  browser.pause(2000);
  browser.url('#/signin');
  browser.pause(2000);
  const txtMail = loginPage.getUserInput();
  txtMail.waitForDisplayed(2000);
  txtMail.click();
  txtMail.setValue(usuario);

  const txtPass = loginPage.getPasswordInput();
  txtPass.click();
  txtPass.setValue(clave);
  loginPage.getLoginButton().click();
  browser.pause(2000);
};

const logout = () => {
  if (browser.getUrl().indexOf('/#/signin') > -1) {
    return;
  }
  const profileBtnWrapper = MainPage.getProfileBtnWrapper();
  profileBtnWrapper.waitForDisplayed(2000);
  profileBtnWrapper.click();

  const logoutBtn = MainPage.getLogoutBtn();
  logoutBtn.waitForDisplayed(1000)
  logoutBtn.click();
  browser.pause(3000);
};


module.exports = {
  login,
  logout
};