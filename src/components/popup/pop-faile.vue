<template>
    <div class="pop" v-if="showFlg">
      <div class="pop-content">
        <img class="close" src="@/assets/img/pop-close.png" alt="" @click="close">
        <div class="msg">抱歉！审核不通过</div>
        <el-button type="primary" class="button" @click="submit">返回修改</el-button>
      </div>
    </div>
</template>

<script>
export default {
  name: "pop-faile",
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
    width: 500px;
    height: 364px;
    background: no-repeat url("~@/assets/img/pop/faile.png");
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
      margin-top: 180px;
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
