var elementId = "threat-comp";
var threatComposition = ['入侵行为','恶意木马','网络蠕虫','恶意病毒','0day攻击'];
var threatComp = [  {name: '入侵行为', count: 150},
                    {name: '恶意木马', count: 100},
                    {name: '网络蠕虫', count: 350},
                    {name: '恶意病毒', count: 220},
                    {name: '0day攻击', count: 200},];

var generateThreatCompPie = function(elementId, threatComposition, threatComp) {
  var dom = document.getElementById(elementId);
  var myChart = echarts.init(dom);
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
      data: threatComposition
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
            show: false,
            length: 5,
            length2: 7,
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
        data:[
          {
            value:threatComp[0].count,
            name:threatComp[0].name,
            itemStyle: {
              normal: {
                color: '#4bacc6',
              },
            },

          },
          {
            value:threatComp[1].count,
            name:threatComp[1].name,
            itemStyle: {
              normal: {
                color: '#4f81bd',
              },
            },
          },
          {
            value:threatComp[2].count,
            name:threatComp[2].name,
            selected: true,
            itemStyle: {
              normal: {
                color: '#c0504d',
              },
            },
          },
          {
            value:threatComp[3].count,
            name:threatComp[3].name,
            itemStyle: {
              normal: {
                color: '#9bbb59',
              },
            },
          },
          {
            value:threatComp[4].count,
            name:threatComp[4].name,
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
}

var dom = document.getElementById(elementId);
var myChart = echarts.init(dom);
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
    data: threatComposition
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
          show: false,
          length: 5,
          length2: 7,
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
      data:[
        {
          value:threatComp[0].count,
          name:threatComp[0].name,
          itemStyle: {
            normal: {
              color: '#4bacc6',
            },
          },

        },
        {
          value:threatComp[1].count,
          name:threatComp[1].name,
          itemStyle: {
            normal: {
              color: '#4f81bd',
            },
          },
        },
        {
          value:threatComp[2].count,
          name:threatComp[2].name,
          selected: true,
          itemStyle: {
            normal: {
              color: '#c0504d',
            },
          },
        },
        {
          value:threatComp[3].count,
          name:threatComp[3].name,
          itemStyle: {
            normal: {
              color: '#9bbb59',
            },
          },
        },
        {
          value:threatComp[4].count,
          name:threatComp[4].name,
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