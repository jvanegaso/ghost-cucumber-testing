const ProfilePage = {

  getTxtPassOld() {
    return $('input#user-password-old');
  },

  getResponseOldPass() {
    return $('input#user-password-old + p.response');
  },

  getTxtPassNew() {
    return $('input#user-password-new');
  },

  getResponseNewPass() {
    return $('input#user-password-new + p.response');
  },


  getTxtPassNewVerification() {
    return $('input#user-new-password-verification');
  },

  getResponseNewPassVerif() {
    return $('input#user-new-password-verification + p.response');
  },


  getBtnChangePassword() {
    return $('button.button-change-password');
  },

}

module.exports = ProfilePage;