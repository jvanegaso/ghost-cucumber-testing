const MainPage = {
  getTitle() {
    return $('h1.site-title');
  },

  getProfileBtnWrapper() {
    return $('.gh-nav-bottom');
  },

  getLogoutBtn() {
    return $('a[href="#/signout/"]');
  }
}

module.exports = MainPage;