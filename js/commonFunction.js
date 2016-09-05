/**
 * Created by escray on 9/2/16.
 */
function generatePie(elementId, title, num, mainColor, otherColor) {
  var opDom = document.getElementById(elementId);
  var opChart = echarts.init(opDom);

  var opOption = {
    textStyle: {
      fontFamily: ['STXihei', 'Microsoft YaHei'],
      fontSize: 10,
    },
    title: {
      text: title,
      textStyle: {
        color: mainColor,
        fontSize: 11,
      },
      x: 'center',
      top: 15,
    },
    hoverAnimation: false,
    silent: true,
    series: [
      {
        name: title,
        type: 'pie',
        center: ['50%', '60%'],
        startAngle: 90,
        radius: [21, 25],
        x: '0%', // for funnel
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true,
            position: 'center',
            formatter: '{c}',
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          emphasis: {
            show: true,

          }
        },
        labelLine: {
          normal: {
            show: false,
          }
        },
        data: [
          {
            name: '其他',
            value: 100 - num,
            itemStyle: {
              normal: {
                color: otherColor,
              },
            },
            label: {
              normal: {
                show: false,
              }
            }
          },
          {
            name: '安全指数',
            value: num,

            itemStyle: {
              normal: {
                color: mainColor,
              },
              label: {
                normal: {
                  show: true,
                }
              },
            },
          },
        ]
      }
    ]
  }
  if (opOption && typeof opOption === "object") {
    opChart.setOption(opOption, true);
  }
}

function generateThreatCompPie(elementId, threatComposition, threatComp) {
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

  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
}