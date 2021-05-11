const StaffPage = {


    getTxtInvitePeople() {
        return $('Invite people');
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