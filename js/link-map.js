
var chinaChart;
var localChart;
var chinaDom = document.getElementById('deploy-china');
var localDom = document.getElementById('deploy-local');

var allCity = ['重庆市', '北京市', '天津市', '上海市', '香港', '澳门', '巴音郭楞蒙古自治州', '和田地区', '哈密地区', '阿克苏地区', '阿勒泰地区', '喀什地区', '塔城地区', '昌吉回族自治州', '克孜勒苏柯尔克孜自治州', '吐鲁番地区', '伊犁哈萨克自治州', '博尔塔拉蒙古自治州', '乌鲁木齐市', '克拉玛依市', '阿拉尔市', '图木舒克市', '五家渠市', '石河子市', '那曲地区', '阿里地区', '日喀则地区', '林芝地区', '昌都地区', '山南地区', '拉萨市', '呼伦贝尔市', '阿拉善盟', '锡林郭勒盟', '鄂尔多斯市', '赤峰市', '巴彦淖尔市', '通辽市', '乌兰察布市', '兴安盟', '包头市', '呼和浩特市', '乌海市', '海西蒙古族藏族自治州', '玉树藏族自治州', '果洛藏族自治州', '海南藏族自治州', '海北藏族自治州', '黄南藏族自治州', '海东地区', '西宁市', '甘孜藏族自治州', '阿坝藏族羌族自治州', '凉山彝族自治州', '绵阳市', '达州市', '广元市', '雅安市', '宜宾市', '乐山市', '南充市', '巴中市', '泸州市', '成都市', '资阳市', '攀枝花市', '眉山市', '广安市', '德阳市', '内江市', '遂宁市', '自贡市', '黑河市', '大兴安岭地区', '哈尔滨市', '齐齐哈尔市', '牡丹江市', '绥化市', '伊春市', '佳木斯市', '鸡西市', '双鸭山市', '大庆市', '鹤岗市', '七台河市', '酒泉市', '张掖市', '甘南藏族自治州', '武威市', '陇南市', '庆阳市', '白银市', '定西市', '天水市', '兰州市', '平凉市', '临夏回族自治州', '金昌市', '嘉峪关市', '普洱市', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '曲靖市', '楚雄彝族自治州', '大理白族自治州', '临沧市', '迪庆藏族自治州', '昭通市', '昆明市', '丽江市', '西双版纳傣族自治州', '保山市', '玉溪市', '怒江傈僳族自治州', '德宏傣族景颇族自治州', '百色市', '河池市', '桂林市', '南宁市', '柳州市', '崇左市', '来宾市', '玉林市', '梧州市', '贺州市', '钦州市', '贵港市', '防城港市', '北海市', '怀化市', '永州市', '邵阳市', '郴州市', '常德市', '湘西土家族苗族自治州', '衡阳市', '岳阳市', '益阳市', '长沙市', '株洲市', '张家界市', '娄底市', '湘潭市', '榆林市', '延安市', '汉中市', '安康市', '商洛市', '宝鸡市', '渭南市', '咸阳市', '西安市', '铜川市', '清远市', '韶关市', '湛江市', '梅州市', '河源市', '肇庆市', '惠州市', '茂名市', '江门市', '阳江市', '云浮市', '广州市', '汕尾市', '揭阳市', '珠海市', '佛山市', '潮州市', '汕头市', '深圳市', '东莞市', '中山市', '延边朝鲜族自治州', '吉林市', '白城市', '松原市', '长春市', '白山市', '通化市', '四平市', '辽源市', '承德市', '张家口市', '保定市', '唐山市', '沧州市', '石家庄市', '邢台市', '邯郸市', '秦皇岛市', '衡水市', '廊坊市', '恩施土家族苗族自治州', '十堰市', '宜昌市', '襄樊市', '黄冈市', '荆州市', '荆门市', '咸宁市', '随州市', '孝感市', '武汉市', '黄石市', '神农架林区', '天门市', '仙桃市', '潜江市', '鄂州市', '遵义市', '黔东南苗族侗族自治州', '毕节地区', '黔南布依族苗族自治州', '铜仁地区', '黔西南布依族苗族自治州', '六盘水市', '安顺市', '贵阳市', '烟台市', '临沂市', '潍坊市', '青岛市', '菏泽市', '济宁市', '德州市', '滨州市', '聊城市', '东营市', '济南市', '泰安市', '威海市', '日照市', '淄博市', '枣庄市', '莱芜市', '赣州市', '吉安市', '上饶市', '九江市', '抚州市', '宜春市', '南昌市', '景德镇市', '萍乡市', '鹰潭市', '新余市', '南阳市', '信阳市', '洛阳市', '驻马店市', '周口市', '商丘市', '三门峡市', '新乡市', '平顶山市', '郑州市', '安阳市', '开封市', '焦作市', '许昌市', '濮阳市', '漯河市', '鹤壁市', '大连市', '朝阳市', '丹东市', '铁岭市', '沈阳市', '抚顺市', '葫芦岛市', '阜新市', '锦州市', '鞍山市', '本溪市', '营口市', '辽阳市', '盘锦市', '忻州市', '吕梁市', '临汾市', '晋中市', '运城市', '大同市', '长治市', '朔州市', '晋城市', '太原市', '阳泉市', '六安市', '安庆市', '滁州市', '宣城市', '阜阳市', '宿州市', '黄山市', '巢湖市', '亳州市', '池州市', '合肥市', '蚌埠市', '芜湖市', '淮北市', '淮南市', '马鞍山市', '铜陵市', '南平市', '三明市', '龙岩市', '宁德市', '福州市', '漳州市', '泉州市', '莆田市', '厦门市', '丽水市', '杭州市', '温州市', '宁波市', '舟山市', '台州市', '金华市', '衢州市', '绍兴市', '嘉兴市', '湖州市', '盐城市', '徐州市', '南通市', '淮安市', '苏州市', '宿迁市', '连云港市', '扬州市', '南京市', '泰州市', '无锡市', '常州市', '镇江市', '吴忠市', '中卫市', '固原市', '银川市', '石嘴山市', '儋州市', '文昌市', '乐东黎族自治县', '三亚市', '琼中黎族苗族自治县', '东方市', '海口市', '万宁市', '澄迈县', '白沙黎族自治县', '琼海市', '昌江黎族自治县', '临高县', '陵水黎族自治县', '屯昌县', '定安县', '保亭黎族苗族自治县',
  '五指山市'];
var index = [99, 99, 99];

var allProvince = ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南', '台湾', '香港', '澳门'];

var items = GenerateCityDetail();

var createLocalDetailBar = function (cityName, elementId, cityData, xAxisMax) {
  var xMax = parseInt(xAxisMax) ? parseInt(xAxisMax) : 200;
  var bjDom = document.getElementById(elementId);
  var bjChart = echarts.init(bjDom);
  var bjoption = {
    textStyle: {
      fontFamily: ['STXihei', 'Microsoft YaHei'],
      fontSize: 10,
    },
    title: {
      // TODO: get rid of the ' '
      text: '  ' + cityName,
      textStyle: {
        fontSize: 14,
        color: '#acacac',
      },
      top: 'middle',
    },
    color: ['#3398DB'],
    tooltip: {
      name: cityName,
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'          // 默认为直线，可选为：'line' | 'shadow'
      },
      // formatter: '{b0}:{c0}' + '\n未安装' + ' : {c1}',
    },
    grid: {
      left: '6%',
      right: '4%',

      // bottom: 1,
      containLabel: false
    },
    yAxis: [
      {
        type: 'category',

        // data: ['已上线', '未上线', '未安装', '已卸载'],
        data: [{
          value: cityName,
          textStyle: {align: 'right',},
        }],
        splitLine: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#aaaaaa',
          },
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
          alignWithLabel: true,
        }
      }
    ],
    xAxis: {
      type: 'value',
      max: xMax,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [

      {
        name: '已上线',
        type: 'bar',
        data: [cityData[0]],
        itemStyle: {
          normal: {
            color: '#3e9256',
          },
        },

      },
      {
        name: '未上线',
        type: 'bar',
        data: [cityData[1]],
        itemStyle: {
          normal: {
            color: '#d64518',
          },
        },
      },
      {
        name: '未安装',
        type: 'bar',
        data: [cityData[2]],
        itemStyle: {
          normal: {
            color: '#ffc000',
          },
        },
      },
      {
        name: '已卸载',
        type: 'bar',
        data: [cityData[3]],
        itemStyle: {
          normal: {
            color: '#762dae',
          },
        },
      }
    ],
  };
  if (bjoption && typeof bjoption === "object") {
    bjChart.setOption(bjoption, true);
  }
};

createLocalDetailBar('北京', 'deploy-beijing', [56, 171, 87, 23]);
createLocalDetailBar('上海', 'deploy-shanghai', [156, 71, 87, 20]);
createLocalDetailBar('深圳', 'deploy-shenzhen', [86, 67, 57, 13]);
createLocalDetailBar('重庆', 'deploy-chongqing', [76, 11, 14, 9]);

function requireCallback(ec) {
  echarts = ec;
  refresh();
  window.onresize = chinaChart.resize;
}

function showDetail(name) {
  var i;

  for (i = 0; i < items.length; i++) {
    if (items[i].name === name) {
      var it = items[i];

      $('#province').text(it.name);
      $('#local-net').text(it.net);
      $('#local-count').text(it.count);
      $('#local-timer').text(it.timer);
      $('#local-uninstall').text(it.uninstall);

      index[0] = it.security;
      index[1] = it.op;
      index[2] = it.virus;

      break;
    }
  }
}

function RoundRandom(num) {
  return Math.round(Math.random() * num);
}

function GenerateCityRandomValue() {
  var cities = [];
  var i;
  for (i = 0; i < allCity.length; i++) {
    cities.push({
      name: allCity[i],
      value: RoundRandom(1000)
    });
  }
  return cities;
}

function GenerateProvinceRandomValue() {
  var provinces = [];
  var i;

  for (i = 0; i < allProvince.length; i++) {
    if (allProvince[i] === "浙江") {
      provinces.push({
        name: allProvince[i],
        selected: true
      });
    }
    else {
      provinces.push({
        name: allProvince[i],
        selected: false
      });
    }
  }
  return provinces;
}

function GenerateCityDetail() {
  var cities = [];
  var allName = allCity.concat(allProvince);
  var i;
  for (i = 0; i < allName.length; i++) {
    cities.push({
      name: allName[i]
    });
  }

  for (i = 0; i < cities.length; i++) {
    cities[i].net = '192.168.' + RoundRandom(254) + '.' + RoundRandom(254);
    cities[i].timer = RoundRandom(1000) + ' 分钟';
    cities[i].count = RoundRandom(100000);
    cities[i].uninstall = RoundRandom(100);
    cities[i].security = RoundRandom(100);
    cities[i].op = RoundRandom(100);
    cities[i].virus = RoundRandom(100);
  }
  return cities;
}

function showProvince(selectedProvince) {
  var localOption = {
    tooltip: {
      trigger: 'item',
      position: [400, 200],
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      x: 'right',
      y: 'center',
      feature: {
        mark: {show: true},
        dataView: {show: true, readOnly: false}
      }
    },

  };

  console.log(allCity.length);
  var cities = GenerateCityRandomValue();

  //option.series[0].show = false;
  localOption.series = [{
    name: '随机数据',
    type: 'map',
    mapType: selectedProvince,
    itemStyle: {
      normal: {label: {show: true}},
      emphasis: {label: {show: true}}
    },
    mapLocation: {
      x: 'auto',
      width: '80%',
    },
    roam: false,
    data: cities,
  }];
  // option1.legend = {
  //   x: 'right',
  //   data: ['随机数据']
  // };
  localOption.dataRange = {
    show: false,
    orient: 'horizontal',
    x: 'right',
    min: 0,
    max: 1000,
    color: ['orange', 'yellow'],
    text: ['高', '低'],           // 文本，默认为数值文本
    splitNumber: 0
  };

  localChart.on('click', function (params) {
    showDetail(params.name);
  });

  localChart.setOption(localOption, true);
}

function refresh() {
  if (chinaChart && chinaChart.dispose) {
    chinaChart.dispose();
  }

  chinaChart = echarts.init(chinaDom);
  localChart = echarts.init(localDom);
  window.onresize = chinaChart.resize;

  var provinces = GenerateProvinceRandomValue();

  var chinaOption = {

    textStyle: {
      fontFamily: ['STXihei', 'Microsoft YaHei'],
      fontSize: 10,
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return params.name + ' : ' + params.value[2];
      },
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      x: 'right',
      y: 'center',
      feature: {
        mark: {show: true},
        dataView: {show: true, readOnly: false}
      }
    },
    series: [
      {
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        name: 'selector',
        type: 'map',


        mapType: 'china',
        mapLocation: {
          x: 'auto',
          y: 'auto',
          width: '90%'
        },
        roam: false,
        selectedMode: 'single',
        itemStyle: {
          normal: {label: {show: true}},
          emphasis: {label: {show: true}}
        },
        data: provinces,

      }
    ],
    animation: false
  };
  //chinaChart.setOption(chinaOption, true)
  showProvince('浙江');
  showDetail('浙江');

  //var ecConfig = require('echarts/config');

  chinaChart.on('mapSelected', function (param) {
    var selected = param.selected;
    var selectedProvince;
    var name;
    for (var i = 0, l = chinaOption.series[0].data.length; i < l; i++) {
      name = chinaOption.series[0].data[i].name;
      chinaOption.series[0].data[i].selected = selected[name];
      if (selected[name]) {
        selectedProvince = name;
      }
    }
    //console.log(selectedProvince);
    if (typeof selectedProvince == 'undefined') {
      // chinaOption.series.splice(1);
      // chinaOption.legend = null;
      // chinaOption.dataRange = null;
      chinaChart.setOption(chinaOption, true);
      return;
    }

    //descDom.innerHTML = selectedProvince;

    showProvince(selectedProvince);
    showDetail(selectedProvince);

  });
  //localChart.setOption(option1, true);
  chinaChart.setOption(chinaOption, true)

}

var echarts;

//for echarts online home page
require.config({
  paths: {
    echarts: 'js/linkmap'
  }
});

showMap();

var isMapShow;

function showMap() {
  if (isMapShow) {
    return;
  }
  // 按需加载
  isMapShow = 1;

  require(
    [
      'echarts',
      'echarts/chart/map',
      'echarts/chart/scatter',
      'echarts/chart/pie'
    ],
    requireCallback
  );

}

