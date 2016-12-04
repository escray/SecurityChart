/**
 * Created by escray on 04/12/2016.
 */
(function(){
  var app = angular.module('threatDynamicList', []);

  app.controller('DetailController', function(){

  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(activeTab) {
      this.tab = activeTab;
    }
  });
})();