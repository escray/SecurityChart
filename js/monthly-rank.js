/**
 * Created by escray on 8/19/16.
 */
var dom = document.getElementById("monthly-rank");
var myChart = echarts.init(dom);
var app = {};
option = null;

// TODO: need compute the position
var rightLabelPos = [530, 8];

option = {
  textStyle: {
    fontFamily: ['STXihei', 'Microsoft YaHei'],
  },
  title: {
    text: '各地预警月排名',
    textStyle: {
      fontSize: 12,
      color: '#acacac',
    },
    subtext: '月预警总数: 42.25 万次',
    subtextStyle: {
      fontSize: 10,
      color: '#ccc',
    },
  },
  color: ['#22c3aa'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
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
  // NOTE: TAKE CARE SORT OF ITEM
  yAxis: {
    type: 'category',
    data: ['长沙', '武汉', '内蒙', '上海', '厦门', '天津', '北京'],
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisTick: {
      show: false,
      alignWithLabel: true,
    }
  },
  series: [
    {
      name: '月预警总数',
      type: 'bar',
      //barWidth: '60%',
      barWidth: 6,
      data: [

        {
          value: 1.2,
          itemStyle: {
            normal: {
              label: {
                show: true,

                position: rightLabelPos,

              }
            }
          }
        },
        {
          value: 1.5,
          label: {
            normal: {
              show: true,
              position: rightLabelPos,
              //position: ['336%', '25%'],
            }
          }
        },
        {
          value: 2.3,
          label: {
            normal: {
              show: true,
              position: rightLabelPos,
              //position: ['336%', '25%'],
            }
          }
        },
        {
          value: 3.2,
          label: {
            normal: {
              show: true,
              position: rightLabelPos,
              //position: ['336%', '25%'],
            }
          }
        },
        {
          value: 3.8,
          label: {
            normal: {
              show: true,
              position: rightLabelPos,
              //position: ['336%', '25%'],
            }
          }
        },
        {
          value: 4.2,
          label: {
            normal: {
              show: true,
              position: rightLabelPos,
              //position: ['336%', '25%'],
            }
          }
        },
        {
          value: 4.8,
          label: {
            normal: {
              show: true,
              position: rightLabelPos,
              //position: ['336%', '25%'],
            }
          }
        },
      ],

    }
  ]
};
;
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}