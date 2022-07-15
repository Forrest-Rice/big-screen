<template>
  <div class="pop" v-if="showFlg">
    <div class="pop-content">
      <img class="close" src="@/assets/img/pop-close.png" alt="" @click="close">

      <div class="msg" v-if="tipsMsg.length > 0">{{tipsMsg}}</div>
      <img class="imgs" v-if="imgPath.length > 0" :src="require(`@/assets/img/${imgPath}`)" />
      <!-- 按钮 -->
      <el-button type="primary" class="button" @click="submit" v-if="btnType == 1">
        {{btnMsg}}
      </el-button>
      <p v-if="btnType == 2" class="btn-text">{{btnMsg}}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "pop",
  props:{
    tipsMsg:{
      type:String,
      default:''
    },
    imgPath:{
      type:String,
      default:''
    },
    btnType:{
      type:Number,//1 按钮  2：文字提示
      default:1
    },
    btnMsg:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      showFlg:false
    }
  },
  created(){
  },
  methods:{
    show(){
      this.showFlg = true
    },
    hide(){
      this.showFlg = false
    },
    close() {
      this.$emit('close')
      this.hide()
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
      background: no-repeat url("~@/assets/img/pop-bg.png");
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
  .btn-text{
    position: absolute;
    bottom:20px;
    left:0;
    font-size:20px;
    color:#1ADCFF;
    width:100%;
    text-align: center;
  }
  .imgs{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
</style>
