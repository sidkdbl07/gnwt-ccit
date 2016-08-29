if (Meteor.isClient) {
  Template.buildingAdd.onRendered(function() {
    $(".tooltipped").tooltip({delay: 50});
  });
}
