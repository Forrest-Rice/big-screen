<template>
  <header>
    <div class="header-left" @click="backHome">
      <img class="home-icon" src="../assets/img/shouye@2x.png" alt="">
      <span>工业大数据平台</span>
    </div>
    <div class="header-center">
      <h1>工业大数据中心</h1>
    </div>
    <div class="header-right">
      <div class="date">
        <div class="week">{{ weektext }}</div>
        <div class="time">{{ datetext }}</div>
      </div>
      <img class="ball" src="../assets/img/shijian@2x.png" alt="">
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      weektext:'',
      datetext:''
    }
  },
  mounted() {
    this.getTime()
  },
  methods:{
    getTime:function(){
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let wk = new Date().getDay()
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      _this.weektext = weeks[wk];
      _this.datetext = yy+'年'+mm+'月'+dd+ '日';
      _this.timetext = hh+':'+mf
    },
    backHome() {
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 101px;
  background: url("../assets/img/dingbulan@2x.png") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 10px 28px 30px 40px;
  z-index: 1200;

  .header-left {
    display: flex;
    align-items: center;

    .home-icon {
      width: 42px;
      height: 41px;
      cursor: pointer;
    }

    span {
      display: block;
      margin-left: 13px;
      font-size: 20px;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
  .header-center{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: 800;
    color: #FFFFFF;
    line-height: 9px;
    background: linear-gradient(0deg, #8BDEF0 0%, #E2F3FB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .header-right {
    display: flex;
    align-items: center;
    text-align: right;
    .date{
      .week{
        font-size: 30px;
        font-weight: normal;
        color: #FFFFFF;
      }
      .time{
        font-size: 16px;
        font-weight: 400;
        color: #9FDBFD;
      }
    }
    .ball{
      width: 61px;
      height: 61px;
    }
  }
}
</style>
