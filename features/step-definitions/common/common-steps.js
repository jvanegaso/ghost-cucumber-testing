const { v4: uuidv4 } = require('uuid');

const { getCurrentTestFolder, createFolder, writeStep } = require('../../../src/util');

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

async function takeScreenshot(driver, stepData, appVersion) {
  try {
    const imgId = uuidv4();
    const currentFolder = await getCurrentTestFolder();
    const imgDesFolder = `${currentFolder}/${appVersion}`;
    await createFolder(imgDesFolder);
    const fileName = `${imgId}.png`;
    const path = `${imgDesFolder}/${fileName}`;
    await driver.saveScreenshot(path);
    await writeStep(stepData, path, appVersion);
  } catch (e) {
    console.error('*******************************\n');
    console.error('There was an error creating a screenshot');
    console.error(e.message);
    console.error('*******************************\n');
  }
}

module.exports = {
  login,
  logout,
  takeScreenshot
};