const LoginPage = {

  getUserInput() {
    return $('input[name="identification"]');
  },

  getPasswordInput() {
    return $('input[name="password"]');
  },

  getLoginButton() {
    return $('button.login');
  },

  getErrorMsg() {
    return $('p.main-error');
  },

  getForgotButton() {
    return $('.forgotten-link');
  }
}

module.exports = LoginPage;