/**
 * Created by escray on 9/6/16.
 */
(function(){
  var elementId = "threat-comp";
  var threatComposition = ['入侵行为','恶意木马','网络蠕虫','恶意病毒','0day攻击'];
  var threatComp = [  {name: '入侵行为', count: 150},
    {name: '恶意木马', count: 100},
    {name: '网络蠕虫', count: 350},
    {name: '恶意病毒', count: 220},
    {name: '0day攻击', count: 200},];

  generateThreatCompPie(elementId, threatComposition, threatComp);
})();