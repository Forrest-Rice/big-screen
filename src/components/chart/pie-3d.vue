<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import 'echarts-gl'
import EleResize from '@/util/esresize';

export default {
  name: "pie3d",
  props: {
    className: {
      type: String,
      default: 'chart1'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    // value: {
    //   type: Number,
    //   default: ''
    // }
    data:{
      type:Array,
      default:[
        {
          name:'abc',
          value:53
        },
        {
          name:'aaa',
          value:45
        },
        {
          name:'bbb',
          value:23
        },
        {
          name:'ccc',
          value:40
        },
        {
          name:'ddd',
          value:23
        },
      ]
    },   // 数据

  },
  data() {
    return {
      angle: 0,
      chart: '',
      // value: 70,
      reginCode: '',
      //数据渲染
      amountList: [],
      businessList: [],
      barData: [],
      optionData:null
    }
  },
  watch:{
    data:{
      handler (newV,oldV){
        this.$nextTick(()=>{
          this.init();
        })
      },
      deep:true
    }
  },
  methods: {
    init() {
      this.optionData = this.data
      this.initChart();

    },
    initChart() {
      var that = this;
      this.chart = echarts.init(this.$el);
      EleResize.on(this.$el, () => {
        this.chart.resize()
      })
      this.option = this.getPie3D(this.optionData,0.6)
      this.chart.setOption(this.option);
    },
    getPie3D(pieData, internalDiameterRatio) {
      let series = [];
      let sumValue = 0;
      let startValue = 0;
      let endValue = 0;
      let legendData = [];
      let k = typeof internalDiameterRatio !== 'undefined' ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio) : 1 / 3;

      for (let i = 0; i < pieData.length; i++) {

          sumValue += pieData[i].value;

          let seriesItem = {
              name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
              type: 'surface',
              parametric: true,
              wireframe: {
                  show: false
              },
              pieData: pieData[i],
              pieStatus: {
                  selected: false,
                  hovered: false,
                  k: k
              }
          };

          if (typeof pieData[i].itemStyle != 'undefined') {

              let itemStyle = {};

              typeof pieData[i].itemStyle.color != 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null;
              typeof pieData[i].itemStyle.opacity != 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null;

              seriesItem.itemStyle = itemStyle;
          }
          series.push(seriesItem);
      }

      for (let i = 0; i < series.length; i++) {
          endValue = startValue + series[i].pieData.value;

          series[i].pieData.startRatio = startValue / sumValue;
          series[i].pieData.endRatio = endValue / sumValue;
          series[i].parametricEquation = this.getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio, false, false, k, series[i].pieData.value);

          startValue = endValue;

          legendData.push(series[i].name);
      }

      series.push({
          name: 'mouseoutSeries',
          type: 'pie',
          radius: ['40%', '90%'],
          center: ['50%', '50%'],
          parametric: true,
          wireframe: {
              show: false
          },
          itemStyle: {
              opacity: 0
          },
          parametricEquation: {
              u: {
                  min: 0,
                  max: Math.PI * 2,
                  step: Math.PI / 20
              },
              v: {
                  min: 0,
                  max: Math.PI,
                  step: Math.PI / 20
              },
              x: function(u, v) {
                  return Math.sin(v) * Math.sin(u) + Math.sin(u);
              },
              y: function(u, v) {
                  return Math.sin(v) * Math.cos(u) + Math.cos(u);
              },
              z: function(u, v) {
                  return Math.cos(v) > 0 ? 0.1 : -0.1;
              }
          }
      });

        let option = {
            // animation: true,
            // title: {
            //   text: 'Referer of a Website',
            //   subtext: 'Fake Data',
            //   left: '40'
            // },
            legend: {
              show:true,
              data: legendData,
              orient: 'vertical',
              right:'30',
              top:'center',
              icon:'circle',
              itemHeight:6,
              textStyle:{
                color:'#ffffff'
              }
            },
          // graphic:{       //图形中间文字
          //   type:"text",
          //   left:"center",
          //   top:"center",
          //   style:{
          //     text:"66",
          //     textAlign:"center",
          //     fill:"#fff",
          //     fontSize:60
          //   }
          // },
            tooltip: {
                formatter: params => {
                    if (params.seriesName !== 'mouseoutSeries') {
                        return `${params.seriesName}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${option.series[params.seriesIndex].pieData.value}%`;
                    }
                }
            },
            xAxis3D: {
                min: -1,
                max: 1
            },
            yAxis3D: {
                min: -1,
                max: 1
            },
            zAxis3D: {
                min: -1,
                max: 1
            },
            grid3D: {
                show: false,
                boxHeight: 0.8,
                viewControl: {
                    alpha: 30,
                    beta: 130,
                    rotateSensitivity: 0,
                    zoomSensitivity: 0,
                    panSensitivity: 0,
                    autoRotate: false
                },
                postEffect: {
                    enable: true,
                    bloom: {
                        enable: true,
                        bloomIntensity: 0.1
                    },
                    SSAO: {
                        enable: true,
                        quality: 'medium',
                        radius: 2
                    }
                }
            },
            series: series
        };
        return option;
    },
    getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h){
      // 计算
      let midRatio = (startRatio + endRatio) / 2;

      let startRadian = startRatio * Math.PI * 2;
      let endRadian = endRatio * Math.PI * 2;
      let midRadian = midRatio * Math.PI * 2;
      // 如果只有一个扇形，则不实现选中效果。
      if (startRatio === 0 && endRatio === 1) {
          isSelected = false;
      }

      k = typeof k !== 'undefined' ? k : 1 / 3;

      // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
      let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : -.5;
      let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : -1;

      // 计算高亮效果的放大比例（未高亮，则比例为 1）
      let hoverRate = isHovered ? 1.05 : 2;

      // 返回曲面参数方程
      return {

          u: {
              min: -Math.PI,
              max: Math.PI * 3,
              step: Math.PI / 32
          },

          v: {
              min: 0,
              max: Math.PI * 2,
              step: Math.PI / 20
          },

          x: function(u, v) {
              if (u < startRadian) {
                  return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
              }
              if (u > endRadian) {
                  return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
              }
              return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
          },

          y: function(u, v) {
              if (u < startRadian) {
                  return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
              }
              if (u > endRadian) {
                  return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
              }
              return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
          },

          z: function(u, v) {
              if (u < -Math.PI * 0.5) {
                  return Math.sin(u);
              }
              if (u > Math.PI * 2.5) {
                  return Math.sin(u) * (h*10) * .1;
              }
              return Math.sin(v) > 0 ? 1 * (h*10) * .1 : -1;
          }
      };
    }
  },
  mounted() {
    var that = this;
    this.init();
  }
}
</script>

<style scoped>

</style>
