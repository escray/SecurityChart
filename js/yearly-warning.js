/**
 * Created by escray on 8/19/16.
 */
var dom = document.getElementById("yearly-warn");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
  textStyle: {
    fontFamily: ['STXihei', 'Microsoft YaHei'],
  },
  title: {
    text: '年度预警总数',
    textStyle: {
      fontSize: 12,
      color: '#acacac',
    },
    subtext: '年度总计: 383.25 万次',
    subtextStyle: {
      fontSize: 10,
      color: '#ccc',
    },
  },
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },

  grid: {
    left: '3%',
    right: '4%',
    bottom: '60',
    containLabel: true
  },
  xAxis:  {
    type: 'category',
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
  },

  series: [
    {
      name: '一产总值',
      type: 'bar',

      stack: '总量',
      label: {
        normal: {
          show: false,
          position: 'insideRight'
        }
      },
      data: [320, 302, 301, 334, 390, 330, 320, 300, 350, 340, 330, 280],
      itemStyle: {
        normal: {
          color: '#22c3aa',
        },
      },

      //barWidth: '15px',
      barWidth: 6,
      barGap: '0.3px',
      barCategoryGap: '5px',
    },
    {
      name: '二产总值',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: false,
          position: 'insideRight'
        }
      },
      data: [120, 132, 101, 134, 90, 230, 210, 110, 150, 200, 130, 122],
      itemStyle: {
        normal: {
          color: '#27727b',
        },
      },
    },
    {
      name: '三产总值',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: false,
          position: 'insideRight'
        }
      },
      data: [220, 182, 191, 234, 290, 330, 310, 300, 200, 240, 260, 280],
      itemStyle: {
        normal: {
          color: '#ffb248',
        },
      },
    },
    {
      name: '四产总值',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: false,
          position: 'insideRight'
        }
      },
      data: [150, 212, 201, 154, 190, 330, 410, 200, 230, 300, 280, 254],
      itemStyle: {
        normal: {
          color: '#eb8146',
        },
      },
    },
    {
      name: '五产总值',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: false,
          position: 'insideRight'
        }
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320, 800, 600, 720, 560, 860],
      itemStyle: {
        normal: {
          color: '#d95850',
        },
      },
    },
    {
      name: '六产总值',
      type: 'bar',
      stack: '总量',
      label: {
        normal: {
          show: false,
          position: 'insideRight'
        }
      },
      data: [620, 632, 701, 834, 990, 1030, 1120, 800, 600, 750, 810, 640],
      itemStyle: {
        normal: {
          color: '#893448',
        },
      },
    },
    // if want to have blank bar, it has to add a new data item
    // whose length need calculate
    // too intricate
    // {
    //   //name: '',
    //   type: 'bar',
    //   //show: false,
    //   stack: '总量',
    //   data: [2200, 2100, 2000, 1900, 1200, 1000, 900, 2000, 2300, 2000, 2100, 2000],
    //   itemStyle: {
    //     normal: {
    //       color: '#1f1f1f',
    //     },
    //   },
    // },
  ],

  legend: {
    left: 'center',
    bottom: '1',
    itemWidth: 20,
    data: [
      {
        name: '一产总值',
      }, '二产总值','三产总值','四产总值','五产总值', '六产总值'],

    textStyle: {
      fontSize: 9,
      color: '#acacac',
    },
  }
};;
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}