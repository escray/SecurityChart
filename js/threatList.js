/**
 * Created by escray on 9/6/16.
 */
(function() {
  var threatComposition = ['入侵行为','恶意木马','网络蠕虫','恶意病毒','0day攻击'];
  var threatComp = [  {name: '入侵行为', count: 150},
    {name: '恶意木马', count: 100},
    {name: '网络蠕虫', count: 350},
    {name: '恶意病毒', count: 220},
    {name: '0day攻击', count: 200},];
  generateThreatCompPie("threat-comp", threatComposition, threatComp);

  var threatSource = ['移动存储设备','其他计算机','光驱','本地计算机','内存','未知'];
  var threatSourceData = [{ name: '移动存储设备', count: 36},
    {name: '其他计算机', count: 26},
    {name: '光驱', count: 18},
    {name: '本地计算机', count: 10},
    {name: '内存', count: 10},
    {name: '未知', count: 5}];
  generateThreatSourcePie("threat-source", threatSource, threatSourceData);

  var threatSort = ['网络入侵行为', '溢出攻击行为','木马恶意程序'];
  var subtitle = '威胁数量: 5.25 万';
  var xAxisData = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  var threatData = [{name: '网络入侵行为', count: [120, 132, 101, 134, 90, 230, 210, 200, 180, 160, 210, 145]},
    {name: '溢出攻击行为', count: [220, 182, 191, 234, 290, 330, 310, 280, 290, 310, 265, 240]},
    {name: '木马恶意程序', count: [150, 232, 201, 154, 190, 330, 410, 380, 420, 230, 320, 360]}];
  generateThreatTrendsLine('threat-trends', subtitle, threatSort, xAxisData, threatData);
})();