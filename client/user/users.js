if (Meteor.isClient) {
  Template.users.helpers({
    'all_users': function() {
      return Meteor.users.find({}, {sort: {'profile.fullname': 1}}).fetch();
    }
  });

  Template.users.events({
    'click .modal-trigger': function(event) {
      var id = $(event.target).closest('tr').data('id');
      //$.publish('toast', [id, "ID", "info", 0]);
      $("#delete_user_id").val(id);
    }
  });

  Template.deleteUserModal.onRendered( function() {
    $('.modal-trigger').leanModal();
  });

  Template.deleteUserModal.events({
    'click #go-ahead-and-delete-user': function(event) {
      var userID = $("#delete_user_id").val();
      if(userID == "") {
        $.publish('toast', ["Could not determine which user to remove", "Error", "error", 0]);
        return;
      }
      Meteor.call('removeAUser', userID);
      $.publish('toast', ["User deleted", "Success", "success", 0]);
    }
  });
}
