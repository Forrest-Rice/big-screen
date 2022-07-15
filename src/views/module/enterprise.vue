<template>
      <div>
        <div class="occ"><span>E:120°</span><span>N:120°</span></div>
        <div class="occ-map">
          <div class="map">
            <img src="../../assets/img/enterprise/ditu@2x.png" alt="">
            <img src="../../assets/img/enterprise/jia.png" alt="">
            <img src="../../assets/img/enterprise/jian.png" alt="">
          </div>

          <div class="chart-right">
            <across-bar></across-bar>
          </div>
        </div>
      </div>
</template>

<script>
import AcrossBar from "../../components/chart/across-bar-3d";
export default {
  name: "enterprise",
  components: {AcrossBar},
}
</script>

<style scoped lang="scss">
  .occ{
    width: 100%;
    box-sizing: border-box;
    padding-left: 111px;
    span{
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #FFFFFF;
      margin-right: 25px;
    }
  }
  .occ-map{
    width: 100%;
    box-sizing: border-box;
    padding-left: 40px;
    display: flex;
    .map{
      width: 1091px;
      height: 420px;
      position: relative;
      img:first-child{
        width: 100%;
        height: 100%;
      }
      img:nth-child(2){
        position: absolute;
        width: 48px;
        height: 48px;
        right: 14px;
        bottom: 55px;
      }
      img:last-child{
        position: absolute;
        width: 48px;
        height: 48px;
        right: 14px;
        bottom: -26px;
      }
    }
    .chart-right{
      width: 626px;
      height: 441px;
      background: url("../../assets/img/enterprise/sekuai@2x.png") no-repeat;
      background-size: 100% 100%;
      margin-left: 46px;
    }
  }
</style>
