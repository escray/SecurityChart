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


  console.log("ready");
  var ds;
  function loadBinaryFile(path, success) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = function () {
      var data = new Uint8Array(xhr.response);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      success(arr.join(""));
    };
    xhr.send();
  };

  loadBinaryFile('/data/security.db', function (data) {
    var sqldb = new SQL.Database(data);
    var res = sqldb.exec("SELECT dwNo,guidComputer,guidCenter,dwIP,strProcessName FROM PlatformLogVirus");
    ds = res[0].values;

    $('#example1').DataTable( {
      data: ds,
      columns: [
        { title: "Name" },
        { title: "Position" },
        { title: "Office" },
        { title: "Extn." },
//        { title: "Start date" },
        { title: "Salary" }
      ]
    } );
  } );
})();

