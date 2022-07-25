<!--
 * @Author: By
 * @Date: 2022-07-25 14:32:45
 * @LastEditTime: 2022-07-25 20:27:01
 * @LastEditors: By
 * @Description: 双碳检测
 * @FilePath: \big-screen\src\views\module\doubleCarbon.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="double-carbon-box">
    <div class="left-box">
      <el-image class="progress-bar-bg" :src="progressBarBg" fit="cover" />
      <span class="left-title">当前用电量TOP10企业 </span>
      <div class="progress-content-box">
        <span class="progress-content-unit">（单位：万度）</span>
        <!-- <div class="progress-content">
          <div class="progress-content-item"></div>
        </div> -->
        <div class="progress-content-item" v-for="(item, index) in progressList" :key="index">
          <span class="progress-content-item-label">{{ item.label }}</span>
          <div class="progress-content-item-main"></div>
          <span class="progress-content-item-value">{{ item.value }}</span>
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="electricity-usage-box">
        <div class="electricity-usage" ref="electricityUsageRef" />
      </div>
      <!-- <el-image class="electricity-usage-bg" :src="electricityUsageBg" fit="cover" /> -->
      <div class="electricity-used-proportion-box">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      progressBarBg: require('@/assets/img/doubleCarbon/progressBarBg.png'),
      electricityUsageBg: require('@/assets/img/doubleCarbon/electricityUsageBg.png'),
      progressList: [],
      electricityUsageOption: {
        // backgroundColor: {
        //   // image: require('@/assets/img/doubleCarbon/electricityUsageBg.png'),
        // },
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    }
  },
  created () {
    for (let index = 0; index < 10; index++) {
      this.progressList.push({
        label: `有限公司${index}`,
        value: `${index}.${index}`
      })

    }
  },
  mounted () {
    this.initElectricityUsageChart()
  },
  methods: {
    initElectricityUsageChart () {
      console.log(`-----------------------------------------------------------------`);

      const electricityUsageChart = this.$eCharts.init(this.$refs.electricityUsageRef)
      console.log(electricityUsageChart);
      electricityUsageChart.setOption(this.electricityUsageOption)
      console.log(`=================================================================`);
    }
  }
}
</script>
<style lang="scss" scoped>
.double-carbon-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .left-box {
    width: 537px;
    height: 698px;
    position: relative;

    ::v-deep .progress-bar-bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }

    .left-title {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;
      top: 0;

      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 45px;
    }

    .progress-content-box {
      width: 100%;
      height: 90%;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 0 34px 40px 22px;
      box-sizing: border-box;

      .progress-content-unit {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #00B8FF;
        align-self: flex-end;
      }

      // .progress-content {
      //   width: 100%;
      //   flex: 1;
      //   display: flex;
      //   flex-direction: column;
      // }
    }
  }

  .right-box {
    height: 100%;
    width: 1271px;
    display: flex;
    flex-direction: column;
    // padding-bottom: 33px;
    // justify-content: space-between;

    .electricity-usage-box {
      width: 1271px;
      height: 497px;
      position: relative;

      background-image: url("~@/assets/img/doubleCarbon/electricityUsageBg.png");
      background-size: cover; // ::v-deep .electricity-usage-bg {
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   width: 100%;
      //   height: 100%;
      // }

      .electricity-usage {
        width: 100%;
        height: 100%;
      }
    }

    .electricity-used-proportion-box {
      margin-top: 33px;
      width: 100%;
      height: 317px;
      background-color: red;
    }



  }
}
</style>