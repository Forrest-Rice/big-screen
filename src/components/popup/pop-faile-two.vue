<template>
  <div class="pop" v-if="showFlg">
    <div class="pop-content">
      <img class="close" src="@/assets/img/pop-close.png" alt="" @click="close">
      <div class="msg">抱歉！录入失败</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pop-faile-two",
  data(){
    return {
      showFlg:false
    }
  },
  methods:{
    submit() {
      this.showFlg = false
    },
    close() {
      this.showFlg = false
    }
  }
}
</script>

<style scoped lang="scss">
.pop{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  .pop-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 480px;
    height: 274px;
    background: no-repeat url("~@/assets/img/pop/faile2.png");
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 20px 82px;
    .close{
      position: absolute;
      top: 26px;
      right: 19px;
      width: 48px;
      height: 48px;
      cursor: pointer;
    }
    .msg{
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #05FFFF;
      margin-top: 200px;
    }
    .button{
      width: 100%;
      height: 52px;
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #02389B;
      line-height: 52px;
      padding: 0;
      margin-top: 40px;
    }
    .el-button--primary{
      background: #1ADCFF;
      border-color: #1ADCFF;
    }
  }
}
</style>
