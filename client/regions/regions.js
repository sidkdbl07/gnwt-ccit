if (Meteor.isClient) {
  Template.regions.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
  });

  Template.regions.helpers({
    'all_regions': function() {
      return Regions.find({}, {sort: {name: 1}}).fetch();
    }
  });

  Template.regions.events({
    'click .modal-trigger': function(event) {
      var id = $(event.target).closest('tr').data('id');
      $("#delete_region_id").val(id);
    }
  });

  Template.deleteRegionModal.onRendered( function() {
    $('.modal-trigger').leanModal();
  });

  Template.deleteRegionModal.events({
    'click #go-ahead-and-delete-region': function(event) {
      var userID = $("#delete_region_id").val();
      if(userID == "") {
        $.publish('toast', ["Could not determine which region to remove", "Error", "error", 0]);
        return;
      }
      Meteor.call('removeRegion', userID);
      $.publish('toast', ["Region deleted", "Success", "success", 0]);
    }
  });
}
