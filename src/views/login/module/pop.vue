<template>
  <div class="pop">
    <div class="pop-content">
      <img class="close" src="../../../assets/img/pop-close.png" alt="" @click="close">
      <div class="msg">{{type == 1?'恭喜您，注册成功':'恭喜您，登录成功'}}</div>
      <el-button type="primary" class="button" @click="submit">
        {{type == 1?'现在去登录':'确认'}}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "pop",
  props:{
    type:{
      type:String,
      default:''
    }
  },
  methods:{
    close() {
      this.$emit('close')
    },
    submit() {
      this.$emit('change')
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
      height: 244px;
      background: no-repeat url("../../../assets/img/pop-bg.png");
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
        margin-top: 70px;
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
