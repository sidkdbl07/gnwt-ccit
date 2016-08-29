TabularTables = {};

TabularTables.Buildings = new Tabular.Table({
  name: "Buildings",
  collection: Buildings,
  pub: 'tabularBuildings',
  paging: false,
  limit: 500,
  scrollY: 400,
  scrollCollapse: true,
  bFilter: false,
  order: [[0, "asc"]],
  columns: [
    {data: "name", title: "Building Name"},
    {data: 'region_name()', title: "Region"}
  ]
});

TabularTables.RegionSnowLoads = new Tabular.Table({
  name: "RegionSnowLoads",
  collection: Regions,
  pub: 'tabularRegionSnowLoads',
  paging: false,
  limit: 500,
  scrollY: 400,
  scrollCollapse: true,
  bFilter: false,
  order: [[0, "asc"]],
  columns: [
    {data: "name", title: "Region Name"}
  ]
});
