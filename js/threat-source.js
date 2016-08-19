/**
 * Created by escray on 8/19/16.
 */
var dom = document.getElementById("threat-source");
var myChart = echarts.init(dom);
option = null;
option = {
  textStyle: {
    fontFamily: ['STXihei', 'Microsoft YaHei'],
  },
  title : {
    text: '威胁来源',
    textStyle: {
      fontSize: 12,
      color: '#acacac',
    },
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    show: false,
    orient: 'vertical',
    left: 'left',
    data: ['移动存储设备','其他计算机','光驱','本地计算机','内存','未知']
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
          value:36,
          name:'移动存储设备',
          itemStyle: {
            normal: {
              color: '#c0504d',
            },
          },
        },
        {
          value:26,
          name:'其他计算机',
          itemStyle: {
            normal: {
              color: '#8064a2',
            },
          },
        },
        {
          value:18,
          name:'光驱',
          selected: true,
          itemStyle: {
            normal: {
              color: '#f79646',
            },
          },
        },
        {
          value:10,
          name:'本地计算机',
          itemStyle: {
            normal: {
              color: '#772c2a',
            },
          },
        },
        {
          value:5,
          name:'内存',
          itemStyle: {
            normal: {
              color: '#4d3b62',
            },
          },
        },
        {
          value:5,
          name:'未知',
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
;
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}