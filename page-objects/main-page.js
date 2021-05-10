const MainPage = {
  getTitle() {
    return $('h1.site-title');
  },

  getProfileBtnWrapper() {
    return $('.gh-nav-bottom');
  },

  getLogoutBtn() {
    return $('a[href="#/signout/"]');
  },

  getProfileButton() {
    return $('div.gh-nav-bottom div[role="button"]');
  },

  getYourProfileLink() {
    return $('.gh-nav-menu-dropdown a[href^="#/staff/"]');
  },

  getNotificationWrapper() {
    return $('.gh-notifications.ember-view');
  },
}

module.exports = MainPage;