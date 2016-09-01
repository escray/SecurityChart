(function() {
  var app = angular.module('deploy', []);

  app.controller('DetailController', function(){

    // this.localDetail = items[0];
  });

  app.controller("PanelController", function(){

    this.tab = 3;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(activeTab) {
      this.tab = activeTab;
    };
  });
})();