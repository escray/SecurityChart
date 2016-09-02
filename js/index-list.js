// /**
//  * Created by escray on 8/21/16.
//  */
//
//
//
//
// var titleTop = 15;
// var radius = [21, 25];
// var labelFormatter = {
//   normal: {
//     label: {
//       formatter: function (params) {
//         return 100 - params.value + '%'
//       },
//       position: ['50%', '50%'],
//     }
//   },
// }
//
//
// var securityDom = document.getElementById("security-index");
// var securityChart = echarts.init(securityDom);
// var securityOption = {
//   textStyle: {
//     fontFamily: ['STXihei', 'Microsoft YaHei'],
//     fontSize: 10,
//   },
//   title: {
//     text: '安全指数',
//     textStyle: {
//       color: '#43955a',
//       fontSize: 11,
//     },
//     x: 'center',
//     top: titleTop,
//   },
//   series: [
//     {
//       name: '安全指数',
//       type: 'pie',
//       center: ['50%', '60%'],
//       startAngle: 90,
//       radius: radius,
//       x: '0%', // for funnel
//       // itemsStyle: labelFormatter,
//       data: [
//         {
//           name: 'other',
//           value: 17,
//           itemStyle: {
//             normal: {
//               color: '#1b672f',
//               label: {
//                 show: false,
//               },
//               labelLine: {
//                 show: false
//               }
//             },
//           },
//         },
//         {
//           name: '安全指数',
//           value: 83,
//           itemStyle: {
//             normal: {
//               color: '#43955a',
//               label: {
//                 show: true,
//                 position: 'center',
//                 formatter: '{c}',
//                 textStyle: {
//                   baseline: 'bottom',
//                   fontSize: 20,
//                   fontWeight: 'bolder',
//                   fontFamily: 'Arial',
//                 }
//               },
//               labelLine: {
//                 show: false
//               }
//             }
//           },
//         }
//       ]
//     }
//   ]
// };
// if (securityOption && typeof securityOption === "object") {
//   securityChart.setOption(securityOption, true);
// }
//
// var opDom = document.getElementById("op-index");
// var opChart = echarts.init(opDom);
// var opOption = {
//   textStyle: {
//     fontFamily: ['STXihei', 'Microsoft YaHei'],
//     fontSize: 10,
//   },
//   title: {
//     text: '运维指数',
//     textStyle: {
//       color: '#ffc000',
//       fontSize: 11,
//     },
//     x: 'center',
//     top: titleTop,
//   },
//   series: [
//     {
//       name: '运维指数',
//       type: 'pie',
//       center: ['50%', '60%'],
//       startAngle: 90,
//       radius: radius,
//       x: '0%', // for funnel
//       itemsStyle: labelFormatter,
//       data: [
//         {
//           name: 'other',
//           value: 52,
//           itemStyle: {
//             normal: {
//               color: '#ac8300',
//               label: {
//                 show: false,
//                 // position: 'center'
//               },
//               labelLine: {
//                 show: false
//               }
//             },
//             emphasis: {
//               color: 'rgba(0,0,0,0)'
//             }
//           },
//         },
//         {
//           name: '安全指数',
//           value: 48,
//           itemStyle: {
//             normal: {
//               color: '#ffc000',
//               label: {
//                 show: true,
//                 position: 'center',
//                 formatter: '{c}',
//                 textStyle: {
//                   baseline: 'bottom',
//                   fontSize: 20,
//                   fontWeight: 'bolder',
//                   fontFamily: 'Arial',
//                 }
//               },
//               labelLine: {
//                 show: true
//               }
//             }
//           },
//
//         },
//
//       ]
//     }
//   ]
// }
// if (opOption && typeof opOption === "object") {
//   opChart.setOption(opOption, true);
// }
//
//
// var virusDom = document.getElementById("virus-index");
// var virusChart = echarts.init(virusDom);
// var virusOption = {
//   textStyle: {
//     fontFamily: ['STXihei', 'Microsoft YaHei'],
//     fontSize: 10,
//   },
//   title: {
//     text: '疫情指数',
//     textStyle: {
//       color: '#ea5513',
//       fontSize: 11,
//     },
//     x: 'center',
//     top: titleTop,
//   },
//   series: [
//     {
//       name: '疫情指数',
//       type: 'pie',
//       center: ['50%', '60%'],
//       startAngle: 90,
//       radius: radius,
//       x: '0%', // for funnel
//       itemsStyle: labelFormatter,
//       data: [
//         {
//           value: 45,
//           name: 'other',
//           itemStyle: {
//             normal: {
//
//               color: '#a93f0f',
//               label: {
//                 show: false,
//                 position: 'center'
//               },
//               labelLine: {
//                 show: false
//               }
//             },
//             emphasis: {
//               color: 'rgba(0,0,0,0)'
//             }
//           },
//         },
//         {
//           name: '疫情指数',
//           value: 55,
//           itemStyle: {
//             normal: {
//               color: '#ea5513',
//               label: {
//                 show: true,
//                 position: 'center',
//                 formatter: '{c}',
//                 textStyle: {
//                   baseline: 'bottom',
//                   fontSize: 20,
//                   fontWeight: 'bolder',
//                   fontFamily: 'Arial',
//                 }
//               },
//               labelLine: {
//                 show: false
//               }
//             }
//           },
//         }
//       ]
//     }
//   ]
// }
// if (virusOption && typeof virusOption == "object") {
//   virusChart.setOption(virusOption, true);
// }