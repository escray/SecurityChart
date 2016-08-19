var dom = document.getElementById("deploy-mon");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '部署状态监测';

// TODO: set the color and number of bar

option = {
  textStyle: {
    fontFamily: ['STXihei', 'Microsoft YaHei'],
  },
  title: {
    text: '部署状态检测',
    textStyle: {
      fontSize: 12,
      color: '#acacac',
    },
//      subtext: '数据来自网络'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: [
    {
      data: ['安装'],
      right: 80,
      textStyle: {
        fontSize: 10,
        color: '#7ec4e6',
      },
    },
    {
      data: ['未安装'],
      right: 5,
      textStyle: {
        fontSize: 10,
        fontWeight: 400,
        color: '#0e5885',
      },
    },
  ],
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['上海','深圳','合肥','成都','安徽','北京'],
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: '#fff',
        fontWeight: 400,
        fontSize: 10,
      },
    },

  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
      inside: true,
    },
    boundaryGap: [0, 0.01]
  },
  series: [
    {
      name: '安装',
      type: 'bar',
      data: [12203, 28489, 9634, 11497, 17174, 6023],
      itemStyle: {
        normal: {
          color: '#7ec4e6',
        },
      },
      barGap: '0.1px',
      barCategoryGap: '12px',
    },
    {
      name: '未安装',
      type: 'bar',
      data: [19325, 6438, 6100, 32159, 13414, 18180],
      itemStyle: {
        normal: {
          color: '#0e5885',
        },
      },
    }
  ]
};
;
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}