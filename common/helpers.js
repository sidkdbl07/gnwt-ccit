Buildings.helpers({
  region_name: function() {
    var region = Regions.findOne({_id: this.region});
    return region && region.name;
  }
});
