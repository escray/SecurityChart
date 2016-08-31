/**
 * Created by escray on 8/30/16.
 */
(function() {
  var app = angular.module('test', []);

  app.controller("ListController", function() {
    this.list = [];
  });

  app.controller("PanelController", function () {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(activeTab) {
      this.tab = activeTab;
    };


    this.selectTab = function (setTab) {
      this.tab = setTab;
    };

    this.isSelected = function (checkTab) {
      return this.tab === checkTab;
    };
  });
})();