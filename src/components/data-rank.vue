<template>
  <div class="datarank" v-if="showFlg">
    <img v-if="iconSrc" class="icons" :src="require(`@/assets/img/datarankicons/${iconSrc}`)"/>
    <div class="data-r">
      <p>
        <span v-if="nums">{{nums}}</span>
        <span v-if="company">{{company}}</span>
      </p>
      <p v-if="text">{{text}}</p>
    </div>
    <div class="bq" v-if="rank">
      <span>{{rank}}名</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "pop",
  props:{
    iconSrc:{
      type:String,
      default:'name.png'
    },
    nums:{
      type:String,
      default:'864310'
    },
    company:{
      type:String,
      default:'家'
    },
    text:{
      type:String,
      default:'规上企业从业人数'
    },
    rank:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      showFlg:true
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
p{margin:0;padding:0;}
.datarank{
  width:235px;
  height:83px;
  background: url('~@/assets/img/datarankicons/bg.png');
  background-size: contain;
  color:#fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  .icons{
    width:45px;
    height:45px;
    padding-left:20px;
    padding-right:20px;
  }
  .data-r{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span:first-child{
      font-size:26px;
      color:#F8B62D;
      padding-right:10px;
    }
    span:last-child{
      color:#FFFFFF;
      font-size:12px;
    }
    p:last-child{
      font-size:14px;
    }
  }
  .bq{
    position: absolute;
    top:0;
    right:0;
    color:#fff;
    background: url('~@/assets/img/datarankicons/biaoqian.png');
    background-size: contain;
    width:44px;
    height:46px;
    span{
      transform: rotate(45deg);
      position: absolute;
      top:8px;
      left:20px;
    }
  }
}
</style>
