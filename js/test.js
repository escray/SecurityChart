// function generatePie(elementId, title, num, mainColor, otherColor) {
//   var opDom = document.getElementById(elementId);
//   var opChart = echarts.init(opDom);
//
//   var opOption = {
//     textStyle: {
//       fontFamily: ['STXihei', 'Microsoft YaHei'],
//       fontSize: 10,
//     },
//     title: {
//       text: title,
//       textStyle: {
//         color: mainColor,
//         fontSize: 11,
//       },
//       x: 'center',
//       top: 15,
//     },
//     hoverAnimation: false,
//     silent: true,
//     series: [
//       {
//         name: title,
//         type: 'pie',
//         center: ['50%', '60%'],
//         startAngle: 90,
//         radius: [21, 25],
//         x: '0%', // for funnel
//         avoidLabelOverlap: false,
//         label: {
//           normal: {
//             show: true,
//             position: 'center',
//             formatter: '{c}',
//             textStyle: {
//               fontSize: '20',
//               fontWeight: 'bold'
//             }
//           },
//           emphasis: {
//             show: true,
//
//           }
//         },
//         labelLine: {
//           normal: {
//             show: false,
//           }
//         },
//         data: [
//           {
//             name: '其他',
//             value: 100 - num,
//             itemStyle: {
//               normal: {
//                 color: otherColor,
//               },
//             },
//             label: {
//               normal: {
//                 show: false,
//               }
//             }
//           },
//           {
//             name: '安全指数',
//             value: num,
//
//             itemStyle: {
//               normal: {
//                 color: '#ffc000',
//               },
//               label: {
//                 normal: {
//                   show: true,
//                 }
//               },
//             },
//           },
//         ]
//       }
//     ]
//   }
//   if (opOption && typeof opOption === "object") {
//     opChart.setOption(opOption, true);
//   }
// }

generatePie( "op-index",'运维指数', 48, '#ffc000','#ac8300');