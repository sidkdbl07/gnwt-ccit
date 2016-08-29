import './regionSnowLoads.html';

if (Meteor.isClient) {
  Template.regionSnowLoads.onRendered( function() {
    $('#snow_load_help_collapsible').collapsible({
      accordion : false
    });
    $("#snow_load_help_button").sideNav({
      menuWidth: 300,
      edge: 'left'
    });
  });
  Template.regionSnowLoads.helpers({
    thresholds: function() {
      var result = _values(this.snow_load_factors.thresholds);
      return result;
    }
  })
}
