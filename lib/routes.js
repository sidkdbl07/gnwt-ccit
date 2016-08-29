Router.configure({
  layoutTemplate: 'main'
});
Router.route('/', {
  name: 'home',
  template: 'default',
  onAfterAction: function() {
    document.title = "Climate Change Risk Evaluation Tool : GNWT PWS";
  }
});
Router.route('/account', {
  name: 'account',
  template: 'account',
  onAfterAction: function() {
    document.title = "My Account : GNWT PWS";
  }
});
Router.route('/buildings', {
  name: 'buildings',
  template: 'buildings',
  loadingTemplate: 'loading',
  waitOn: function() {
    this.subscribe("buildingsForList");
  },
  onAfterAction: function() {
    document.title = "Buildings : GNWT PWS";
  }
});
Router.route('/buildings/map', {
  name: 'buildingsMap',
  template: 'buildingsMap',
  loadingTemplate: 'loading',
  waitOn: function() {
    this.subscribe("buildingsForMap");
  },
  onAfterAction: function() {
    document.title = "Buildings : GNWT PWS";
  }
});
Router.route('/building/add', {
  name: 'buildingAdd',
  template: 'buildingAdd',
  onAfterAction: function() {
    document.title = "Add a Building : GNWT PWS";
  }
});
Router.route('/regions', {
  name: 'regions',
  template: 'regions',
  loadingTemplate: 'loading',
  waitOn: function() {
    this.subscribe("regions");
  },
  onAfterAction: function() {
    document.title = "Regions : GNWT PWS";
  }
});
Router.route('/region/add', {
  name: 'regionAdd',
  template: 'regionAdd',
  onAfterAction: function() {
    document.title = "Add a Region : GNWT PWS";
  }
});
Router.route('/region/edit/:_id', {
  name: 'regionEdit',
  template: 'regionEdit',
  loadingTemplate: 'loading',
  waitOn: function() {
    this.subscribe("region", this.params._id);
  },
  data: function() {
    return Regions.findOne({ _id: this.params._id });
  },
  onAfterAction: function() {
    document.title = "Edit a Region : GNWT PWS";
  }
});
Router.route('/region/snowloads/:_id', {
  name: 'regionSnowLoads',
  template: 'regionSnowLoads',
  loadingTemplate: 'loading',
  waitOn: function() {
    this.subscribe("region", this.params._id);
  },
  data: function() {
    return Regions.findOne({ _id: this.params._id });
  },
  onAfterAction: function() {
    document.title = "Edit a Region : GNWT PWS";
  }
});
Router.route('/users', {
  name: 'users',
  template: 'users',
  loadingTemplate: 'loading',
  waitOn: function() {
    this.subscribe("usersInMyGroup");
  },
  onAfterAction: function() {
    document.title = "Users : GNWT PWS";
  }
});
Router.route('/user/add', {
  name: 'userAdd',
  template: 'userAdd',
  onAfterAction: function() {
    document.title = "Add a User : GNWT PWS";
  },
  loadingTemplate: 'loading',
  waitOn: function() {
    this.subscribe("usersInMyGroup");
  },
});
Router.route('/user/edit/:_id', {
  name: 'userEdit',
  template: 'userEdit',
  loadingTemplate: 'loading',
  waitOn: function() {
    this.subscribe("usersInMyGroup");
  },
  data: function() {
    return Meteor.users.findOne({ _id: this.params._id });
  },
  onAfterAction: function() {
    document.title = "Edit a User : GNWT PWS";
  }
});
Router.route('/user/view/:_id', {
  name: 'userView',
  template: 'userView',
  onAfterAction: function() {
    document.title = "User Details : GNWT PWS";
  }
});

var IronRouter_BeforeHooks = {
  is_logged_in: function() {
    if(Meteor.user() === null) {
      $.publish('toast', ["Click the button above to access the features of this application.", "You are not logged in!", "info"]);
      Router.go('/');
      //$.publish('page_changed', [Router.current().route.getName()]);
      //this.next();
    }
    this.next();
  }
}
Router.before( IronRouter_BeforeHooks.is_logged_in, {except: ['home']});

var IronRouter_AfterHooks = {
  page_loaded: function() {
    $('.button-collapse').sideNav('hide');
    $('.tooltipped').tooltip('remove');
  }
}
Router.after( IronRouter_AfterHooks.page_loaded);
