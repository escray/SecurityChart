/**
 * Created by escray on 8/19/16.
 */
var dom = document.getElementById("threat-trends");
var myChart = echarts.init(dom);
option = null;
option = {
  textStyle: {
    fontFamily: ['STXihei', 'Microsoft YaHei'],
  },
  title: {
    text: '各类威胁发展趋势',
    textStyle: {
      fontSize: 12,
      color: '#acacac',
    },
    subtext: '威胁数量: 5.25 万',
    subtextStyle: {
      fontSize: 10,
      color: '#ccc',
    },
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    left: 'center',
    bottom: 1,
    itemWidth: 20,
    data:['网络入侵行为','溢出攻击行为','木马恶意程序'],
    //bottom: 10,
    textStyle: {
      fontSize: 9,
      color: '#acacac',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: 24,
    containLabel: true
  },
//    toolbox: {
//        feature: {
//            saveAsImage: {}
//        }
//    },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#acacac',
      },
    },
    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    axisLabel: {
      textStyle: {
        color: '#fff',
        //fontWeight: 400,
        fontSize: 7,
      },
    },
  },
  yAxis: {
    type: 'value',
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
      name:'网络入侵行为',
      type:'line',
      stack: '总量',
      smooth: true,
      smoothMonotone: 'y',
      data:[120, 132, 101, 134, 90, 230, 210, 200, 180, 160, 210, 145]
    },
    {
      name:'溢出攻击行为',
      type:'line',
      stack: '总量',
      smooth: true,
      smoothMonotone: 'y',
      data:[220, 182, 191, 234, 290, 330, 310, 280, 290, 310, 265, 240]
    },
    {
      name:'木马恶意程序',
      type:'line',
      stack: '总量',
      smooth: true,
      smoothMonotone: 'y',
      data:[150, 232, 201, 154, 190, 330, 410, 380, 420, 230, 320, 360]
    },

  ]
};
;
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}