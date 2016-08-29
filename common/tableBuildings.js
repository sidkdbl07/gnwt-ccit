TabularTables = {};

TabularTables.Buildings = new Tabular.Table({
  name: "Buildings",
  collection: Buildings,
  pub: 'tabularBuildings',
  paging: false,
  scrollY: 400,
  scrollCollapse: true,
  bFilter: false,
  order: [[0, "asc"]],
  columns: [
    {data: "name", title: "Building Name"},
    {data: 'region_name()', title: "Region"}
  ]
});
