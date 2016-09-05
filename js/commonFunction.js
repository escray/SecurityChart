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
  var option = {
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
        center: ['50%', '55%'],
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

function generateThreatSourcePie(elementId, threatSource, threatSourceData, title) {
  var dom = document.getElementById(elementId);
  var myChart = echarts.init(dom);
  var option = {
    textStyle: {
      fontFamily: ['STXihei', 'Microsoft YaHei'],
    },

    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      show: false,
      orient: 'vertical',
      left: 'left',
      data: threatSource
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

    series : [
      {
        name: '威胁来源',
        type: 'pie',
        selectedOffset: 10,
        radius : '45%',
        center: ['50%', '55%'],
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
        // TODO: the value of name might be specified with number and text
        data:[
          {
            value:threatSourceData[0].count,
            name:threatSourceData[0].name,
            itemStyle: {
              normal: {
                color: '#c0504d',
              },
            },
          },
          {
            value:threatSourceData[1].count,
            name:threatSourceData[1].name,
            itemStyle: {
              normal: {
                color: '#8064a2',
              },
            },
          },
          {
            value:threatSourceData[2].count,
            name:threatSourceData[2].name,
            selected: true,
            itemStyle: {
              normal: {
                color: '#f79646',
              },
            },
          },
          {
            value:threatSourceData[3].count,
            name:threatSourceData[3].name,
            itemStyle: {
              normal: {
                color: '#772c2a',
              },
            },
          },
          {
            value:threatSourceData[4].count,
            name:threatSourceData[4].name,
            itemStyle: {
              normal: {
                color: '#4d3b62',
              },
            },
          },
          {
            value:threatSourceData[5].count,
            name:threatSourceData[5].name,
            itemStyle: {
              normal: {
                color: '#b65708',
              },
            },
          },
        ],
      }
    ]
  };

  option.title = title ? title : {
    text: '威胁来源',
    textStyle: {
      fontSize: 12,
      color: '#acacac',
    },
  };

  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
}

function generateThreatTrendsLine(elementId, threatSort, xAxisData, threatData, title) {
  var dom = document.getElementById(elementId);
  var myChart = echarts.init(dom);

  var option = {
    textStyle: {
      fontFamily: ['STXihei', 'Microsoft YaHei'],
    },

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      left: 'center',
      bottom: 1,
      itemWidth: 16,
      icon: 'roundRect',
      data: threatSort,
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
      data: xAxisData,
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
        name:threatData[0].name,
        data:threatData[0].count,
        type:'line',
        stack: '总量',
        lineStyle: {
          normal: {
            color: '#ffb248',
          },
        },
        itemStyle: {
          normal: {
            color: '#ffb248',
          },
        },
        smooth: true,
        smoothMonotone: 'y',
      },
      {
        name:threatData[1].name,
        data:threatData[1].count,
        type:'line',
        itemStyle: {
          normal: {
            color: '#b8110d',
          },
        },
        stack: '总量',
        smooth: true,
        smoothMonotone: 'y',
      },
      {
        name:threatData[2].name,
        data:threatData[2].count,
        type:'line',
        stack: '总量',
        itemStyle: {
          normal: {
            color: '#22c3aa',
          },
        },
        smooth: true,
        smoothMonotone: 'y',
      },

    ]
  };
  option.title = title ? title : {
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
  };
  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
}