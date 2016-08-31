(function() {
  var app = angular.module('deploy', []);

  app.controller('DetailController', function(){
     this.localDetail = items[1];
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



var items = [
  {
    name: '浙江省',
    net: '192.168.1.1',
    timer: '24801 分钟',
    count: 10573,
    uninstall: 78
  },
  {
    name: '陕西省',
    net: '192.168.1.1',
    timer: '10080 分钟',
    count: 2093,
    uninstall: 50
  },
  ];