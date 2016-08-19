/**
 * Created by escray on 8/19/16.
 */
var dom = document.getElementById("threat-comp");
var myChart = echarts.init(dom);
var app = {};

option = null;
option = {
  textStyle: {
    fontFamily: ['STXihei', 'Microsoft YaHei'],
  },
  title: {
    text: '威胁构成',
    textStyle: {
      fontSize: 12,
      color: '#acacac',
    },
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    show: false,
    orient: 'vertical',
    x: 'left',
    data:['入侵行为','恶意木马','网络蠕虫','恶意病毒','0day攻击']
  },
  series: [
    {
      name:'威胁构成',
      type:'pie',
      radius: ['32%', '45%'],
      startAngle: 145,
      avoidLabelOverlap: false,
      selectedOffset: 10,

      label: {
        normal: {
          show: true,
          position: 'outside',
          textStyle: {
            fontSize: '10',
          },
        },
        emphasis: {
          show: false,
        },
      },

      labelLine: {
        normal: {
          show: true,
        },
        emphasis: {
          show: false,
        }
      },

      itemStyle: {
        normal: {
          borderColor: 'black',
          borderWidth: 2,
        },
        emphasis: {
          show: true,
          borderColor: 'black',
          borderWidth: 9,
        }
      },

      // TODO: the value of name might be specified with number and text
      data:[
        {
          value:150,
          name:'入侵行为',
          itemStyle: {
            normal: {
              color: '#4bacc6',
            },
          },

        },
        {
          value:100,
          name:'恶意木马',
          itemStyle: {
            normal: {
              color: '#4f81bd',
            },
          },
        },
        {
          value:350,
          name:'网络蠕虫',
          selected: true,
          itemStyle: {
            normal: {
              color: '#c0504d',
            },
          },
        },
        {
          value:220,
          name:'恶意病毒',
          itemStyle: {
            normal: {
              color: '#9bbb59',
            },
          },
        },
        {
          value:220,
          name:'0day攻击',

          itemStyle: {
            normal: {
              color: '#8064a2',
            },
          },
        }
      ]
    }
  ]
};
;
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}