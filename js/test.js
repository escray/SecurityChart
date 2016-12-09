 $(document).ready(function() {
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
});

// var tableCreate = function() {
//   function valconcat(vals, tagName) {
//     if (vals.length == 0) return;
//     var open = '<'+tagName+'>', close = '</'+tagName+'>';
//     return open + vals.join(close+open) + close;
//   }
//
//   return function(columns, values) {
//     var tbl = document.createElement('table');
//     tbl.setAttribute('id', 'logattack');
//     tbl.setAttribute('class', 'display');
//     tbl.setAttribute('cellspace', '0');
//     tbl.setAttribute('width', '100%');
//     var html = '<thead>' + valconcat(columns, 'th') + '</thead>';
//     var rows = values.map(function(v) {
//       return valconcat(v, 'td');
//     });
//     html += '<tbody>' + valconcat(rows, 'tr') + '</tbody>';
//     tbl.innerHTML = html;
//     return tbl;
//   }
// }();
//
// function execute(commands) {
//   var res = sqldb.exec(commands);
//   outputElm.innerHTML = "";
//   //for (var i = 0; i<result.length; i++) {
//   outputElm.appendChild(tableCreate(res[0].columns, res[0].values));
//   //}
// }
//
// var outputElm = document.getElementById('output');
// var errorElm = document.getElementById('error');
//
//
//
//
// function print(text) {
//   outputElm.innerHTML = text.replace(/\n/g, '<br>');
// }
//
// function noerror() {
//   errorElm.style.height = '0';
// }
//
// function error(e) {
//   console.log(e);
//   errorElm.style.height = '2em';
//   errorElm.textContent = e.message;
// }