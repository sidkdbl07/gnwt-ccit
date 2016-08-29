if (Meteor.isClient) {
  Template.buildings.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
  });

  Template.buildings.helpers({
    'all_buildings': function() {
      return Buildings.find().fetch();
    },
    'region_name': function(region_id) {
      var region = Regions.findOne({_id: region_id});
      return region.name;
    }
  });

  Template.deleteBuildingModal.onRendered( function() {
    $('.modal-trigger').leanModal();
  });
}
