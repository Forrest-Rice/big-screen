<template>
    <div style="width: 100%;height: 100%"></div>
</template>

<script>
import * as echarts from 'echarts'
import EleResize from '@/util/esresize'
export default {
  name: 'across-bar',
  data () {
    return {
      data: [10,9.98,2,1, 1.85, 10, 10, 10, 10, 10],
    }
  },
  activated () {
  },
  mounted () {
    this.initChart()
  },
  methods: {

    initChart () {
      var myChart = echarts.init(this.$el)
      EleResize.on(this.$el, () => {
        myChart.resize()
      })
      myChart.setOption({
        grid: {
          top: '10%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            data: ['公司1', '公司1', '公司1', '公司1', '公司1', '公司1', '公司1','公司1', '公司1', '公司1'],
            axisTick: {
              show: false
            },
            axisLabel: {//y轴文字的配置
              textStyle: {
                color: '#00B8FF',
              },
            },
            axisLine: {
              show: false
            }
          },
          {
            type: 'category',
            inverse: true,
            data: this.data,
            axisTick: {
              show: false
            },
            axisLabel: {//y轴文字的配置
              textStyle: {
                color: '#00B8FF',
              },
            },
            axisLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            smooth: true,
            data: this.data,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255, 255, 255, 0.2)',
            },
            label: {
              show: false,
              position: 'right',
              color: '#00B8FF',
              // formatter: function (params) {
              //   return params.value
              // }
            },
            itemStyle:{
              normal:{
                barBorderRadius: [5, 5, 5, 5], //（顺时针左上，右上，右下，左下）
                color: new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    {offset: 0, color: '#0071FC'},
                    {offset: 1, color: '#4BE2EC'}
                  ]
                )
              }
            }
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>
