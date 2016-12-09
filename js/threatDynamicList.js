/**
 * Created by escray on 04/12/2016.
 */
(function () {
  var app = angular.module('threatDynamicList', []);

  app.controller('DetailController', function () {

  });

  app.controller('PanelController', function () {
    this.tab = 1;

    this.isSet = function (checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function (activeTab) {
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
    var resAttack = sqldb.exec("SELECT dwNo,guidComputer,guidCenter,dwIP, dwProtocol,dwRemoteIP,dwDLocalPort,nDealResult,tmDefendTime,tmAddTime FROM PlatformLogAttack");
    var resClient = sqldb.exec("SELECT guidComputer,guidCenter,guidGroup,strComputerName,dwIP,dwMAC,dwSubNetMask,strProductVersion,strVirusLibrayVersion,dwOperateSystem FROM PlatformClientInfo");
    var resCenter = sqldb.exec("SELECT dwIP, strMAC,strComputerName,strCenterName,nState,nCenterLevel,tmRegisterTime,tmLastActiveTime,tmLogonOffTime FROM PlatformCenter");
    // dwNo,guidComputer,guidCenter,dwIP,strProcessName,strProcessCreater,nUnknownFlag,nKnowVirusType,strVirusName,nUnknowVirusType,dwVirusCode,nDetector,nDiskType,nDealResult,tmFindTime,tmAddTime,tmAddPlatformTime
    var resVirus = sqldb.exec("SELECT dwNo,guidComputer,guidCenter,dwIP,strProcessName,strProcessCreater,nUnknownFlag,nDealResult,tmFindTime,tmAddTime FROM PlatformLogVirus");

    // dwNo,guidComputerID,guidCenterID,dwIP,strMAC,strProcessName,nDealResult,tmFindTime,tmAddTime,tmAddPlatformTime
    var resOverflow = sqldb.exec("SELECT dwNo,guidComputerID,guidCenterID,dwIP,strMAC,strProcessName,nDealResult,tmFindTime,tmAddTime FROM PlatformLogOverFlow");
    //guidGroup,guidCenter,strGroupName,strGroupPath,strDescription,nUpdateLimit,tmStateChangeTime
    var resGroup = sqldb.exec("SELECT guidGroup,guidCenter,strGroupName,strGroupPath,strDescription,nUpdateLimit FROM PlatformGroup");

    $('#tblGroup').DataTable({
      data: resGroup[0].values,
      columns: [
        {title: "组编号"},
        {title: "所属中心名称"},
        {title: "组名称"},
        {title: "所属组"},
        {title: "组信息描述"},
        {title: "组升级限制策略"}
      ]
    });

    $('#tblOverFlow').DataTable({
      data: resOverflow[0].values,
      columns: [
        {title: "编号"},
        {title: "计算机名称"},
        {title: "所属中心"},
        {title: "IP地址"},
        {title: "MAC地址"},
        {title: "被溢出程序名称"},
        {title: "处理结果"},
        {title: "拦截时间"},
        {title: "上报时间"}
      ]
    });

    $('#tblVirus').DataTable({
      data: resVirus[0].values,
      columns: [
        {title: "编号"},
        {title: "计算机名称"},
        {title: "所属中心"},
        {title: "IP地址"},
        {title: "恶意程序文件名"},
        {title: "创建恶意程序的文件名"},
        {title: "已知/新型类别"},
        {title: "处理结果"},
        {title: "拦截时间"},
        {title: "上报时间"}
      ]
    });

    $('#tblAttack').DataTable({
      data: resAttack[0].values,
      columns: [
        {title: "编号"},
        {title: "计算机名称"},
        {title: "所属中心"},
        {title: "被攻击主机IP地址"},
        {title: "攻击所用协议类型"},
        {title: "攻击方IP地址"},
        {title: "被攻击端口号"},
        {title: "处理结果"},
        {title: "拦截时间"},
        {title: "上报时间"}
      ]
    });

    $('#tblCenter').DataTable({
      data: resCenter[0].values,
      columns: [
        {title: "IP地址"},
        {title: "MAC地址"},
        {title: "中心名称"},
        {title: "中心别名"},
        {title: "在线状态"},
        {title: "中心级别"},
        {title: "中心部署时间"},
        {title: "最后激活时间"},
        {title: "离线时间"}
      ]
    });

    $('#tblClient').DataTable({
      data: resClient[0].values,
      columns: [
        {title: "计算机标识"},
        {title: "所属中心"},
        {title: "所属分组"},
        {title: "计算机名称"},
        {title: "IP地址"},
        {title: "MAC地址"},
        {title: "网络掩码"},
        {title: "程序版本号"},
        {title: "特征码库版本号"},
        {title: "操作系统类型"}
        // {title: "防御状态"},
        // {title: "防火墙开启状态"},
        // {title: "防火墙规则"},
      ]
    });
  });
})();

