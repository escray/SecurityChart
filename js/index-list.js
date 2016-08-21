/**
 * Created by escray on 8/21/16.
 */

// TODO: bad taste, need refactor!

var securityDom = document.getElementById("security-index");
var opDom = document.getElementById("op-index");
var virusDom = document.getElementById("virus-index");

var securityChart = echarts.init(securityDom);
var opChart = echarts.init(opDom);
var virusChart = echarts.init(virusDom);

securityOption = null;
opOption = null;
virusOption = null;


var radius = [22, 28];

securityOption = {
  textStyle: {
    fontFamily: ['STXihei', 'Microsoft YaHei'],
    fontSize: 10,
  },
  title: {
    text: '安全指数',
    textStyle: {
      color: '#43955a',
      fontSize: 11,
    },
    x: 'center',
    top: 10,
  },
  series: [
    {
      type: 'pie',
      center: ['50%', '60%'],
      startAngle: 90,
      radius: radius,
      x: '0%', // for funnel
      itemStyle: {
        normal: {
          label: {
            formatter: '{c}',
            textStyle: {
              baseline: 'top',
              fontSize: 20,
              fontWeight: 'bolder',
              fontFamily: 'Arial',
            }
          }
        },
      },
      data: [
        {
          name: 'other', value: 17, itemStyle: {
          normal: {
            color: '#1b672f',
            label: {
              show: false,
            },
            labelLine: {
              show: false
            }
          },
        }
        },
        {
          name: '安全指数', value: 83, itemStyle: {
          normal: {
            color: '#43955a',
            label: {
              show: true,
              position: 'center',
            },
            labelLine: {
              show: false,
            },
          }
        }
        }
      ]
    }
  ]
};

opOption = {
  textStyle: {
    fontFamily: ['STXihei', 'Microsoft YaHei'],
    fontSize: 10,
  },
  title: {
    text: '运维指数',
    textStyle: {
      color: '#ffc000',
      fontSize: 11,
    },
    x: 'center',
    top: 10,
  },
  series: [
    {
      type: 'pie',
      center: ['50%', '60%'],
      startAngle: 90,
      radius: radius,
      x: '0%', // for funnel
      itemStyle: {
        normal: {
          label: {

            formatter: '{c}',
            textStyle: {
              baseline: 'top',

              fontSize: 20,
              fontWeight: 'bolder',
              fontFamily: 'Arial',
            }
          }
        },
      },
      data: [
        {
          name: 'other',
          value: 52,
          itemStyle: {
            normal: {
              color: '#ac8300',
              label: {
                show: false,
              },
              labelLine: {
                show: false
              }
            },
          }
        },
        {
          name: '安全指数',
          value: 48,
          itemStyle: {
            normal: {
              color: '#ffc000',
              label: {
                show: true,
                position: 'center',
              },
            }
          }
        },

      ]
    }
  ]
}

virusOption = {
  textStyle: {
    fontFamily: ['STXihei', 'Microsoft YaHei'],
    fontSize: 10,
  },
  title: {
    text: '疫情指数',
    textStyle: {
      color: '#ea5513',
      fontSize: 11,
    },
    x: 'center',
    top: 10,
  },
  series: [
    {
      name: '疫情指数',
      type: 'pie',
      center: ['50%', '60%'],
      //startAngle: 90,
      radius: radius,
      //x: '0%', // for funnel

      label: {
        normal: {
          show: true,
          formatter: '{c}',
          position: 'center',
          textStyle: {
            // baseline: 'bottom',
            fontSize: 20,
            fontWeight: 'bolder',
            fontFamily: 'Arial',
          }
        },
        // emphasis: {
        //   show: false,
        // },
      },

      itemStyle : {
        normal : {
          label : {
            formatter : '{c}',
            textStyle: {
              baseline: 'top',
            }
          }
        },
      },
      data: [
        {
          value: 52,
          name: 'other',
          itemStyle: {
            normal: {
              color: '#a93f0f',
              label: {
                show: false,
                postion: 'outside'
              },
              // labelLine: {
              //   show: false
              // }
            },
          }
        },
        {
          name: '安全指数',
          value: 48,
          itemStyle: {
            normal: {
              color: '#ea5513',
              label: {
                show: true,
                //position: 'center',
              },
              // labelLine: {
              //   show: false,
              // },
            }
        }
        }
      ]
    }
  ]
}

if (securityOption && typeof securityOption === "object") {
  securityChart.setOption(securityOption, true);
}

if (opOption && typeof opOption === "object") {
  opChart.setOption(opOption, true);
}

if (virusOption && typeof virusOption == "object") {
  virusChart.setOption(virusOption, true);
}