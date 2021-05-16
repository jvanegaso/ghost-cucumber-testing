const StaffPage = {


  getTxtNewName() {
    return $('input#user-name');
  },

  getTxtNewSlug() {
    return $('input#user');
  },

  getInvitePeopleButton() {
    return $('div.gh-nav-bottom div[role="button"]');
  },

      
    getTxtNewUserEmail() {
      return $('input#new-user-email');
    },

    getTxtNewUserEmailResponse() {
      return $('input#new-user-email + p.response');
    },

    
    getTxtNewUserRole() {
        return $('#new-user-role');
      },
  
    getBtnSendInvitation() {
      return $('Send invitation now');
    },
  
  }
  
  module.exports = StaffPage;