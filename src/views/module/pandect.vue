<template>
  <div class="pandect-wrap">
    <div class="pandect-left">
      <div class="top10">
        <div class="letf-title">TOP10产业排名</div>
        <div class="target">上升：9.0</div>
        <across-bar></across-bar>
      </div>
      <div class="Income">
        <div class="income_title">各产业主营业务收入占比</div>
        <div class="income_pie">
          <div class="remarks">
            <span><span class="money">1000</span>亿元</span><br/>
            <span>主营业务收入</span>
          </div>
          <pie3d></pie3d>
        </div>
      </div>
    </div>
    <div class="pandect-center">

    </div>
    <div class="pandect-right">

    </div>
    <!-- 文字弹框样式 -->
     <tips
      :imgPath="'pwd.png'"
      :btnType='2'
      :btnMsg="'恭喜您，注册成功'"
      @close="tipClose"
      @change="tipChange"
    ></tips>
    <!--审核失败弹窗-->
    <pop-faile></pop-faile>
    <!--审核通过弹窗-->
    <pop-pass></pop-pass>
    <!-- 录入失败 -->
    <pop-faile-two></pop-faile-two>
    <!-- 录入成功 -->
    <pop-pass-two></pop-pass-two>
    <!-- 待审核 -->
    <pop-end></pop-end>
    <!-- 数字排名 -->
    <!-- <data-rank
      :iconSrc="'phone.png'"
      :nums="'12345678'"
      :company="'家'"
      :text="'规上企业从业人数'"
      :rank="'6'"
    ></data-rank> -->
<!--    <div style="width:400px;height:400px;">-->
<!--      <map-zoning></map-zoning>-->
<!--    </div>-->


  </div>
</template>

<script>
import AcrossBar from "../../components/chart/across-bar-3d";
import Pie3d from "../../components/chart/pie-3d";
import DataRank from '../../components/data-rank';
import MapZoning from '../../components/map-zoning';
import tips from '../../components/tips'
import PopFaile from "../../components/popup/pop-faile";
import PopPass from "../../components/popup/pop-pass";
import PopFaileTwo from "../../components/popup/pop-faile-two";
import PopPassTwo from "../../components/popup/pop-pass-two";
import PopEnd from "../../components/popup/pop-end";
export default {
  name: "pandect",
  components: {PopEnd, PopPassTwo, PopFaileTwo, PopPass, PopFaile, Pie3d, AcrossBar,tips,DataRank,MapZoning},
  data() {
    return {

    }
  },
  methods: {
    tipClose(){
      console.log("<>>>>>>>>>>tipClose")
    },
    tipChange(){
      console.log("<>>>>>>>>>>tipChange")
    }
  },
}
</script>

<style scoped lang="scss">
  .pandect-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .pandect-left{
      .top10{
        position: relative;
        box-sizing: border-box;
        padding: 13px 26px;
        width: 471px;
        height: 538px;
        background: url("../../assets/img/paimingbeijin@2x.png") no-repeat;
        background-size: 100% 100%;
        .letf-title{
          font-size: 16px;
          font-weight: 400;
          color: #FFFFFF;
        }
        .target{
          width: 418px;
          position: absolute;
          left: 0;
          top: 54px;
          text-align: right;
          font-size: 14px;
          font-weight: 400;
          color: #00B8FF;
        }
      }
      .Income{
        margin-top: 30px;
        width: 468px;
        height: 253px;
        background: no-repeat url("../../assets/img/pandect/sekuai2@2x.png");
        background-size: 100% 100%;
        .income_title{
          width: 100%;
          height: 45px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 45px;
          text-align: center;
        }
        .income_pie{
          position: relative;
          width: 100%;
          height: 200px;
          .remarks{
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 12px;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 20px;
            text-align: center;
            .money{
              display: inline-block;
              margin-right: 10px;
              font-size: 14px;
              font-family: Source Han Sans CN;
              font-weight: 600;
              color: #F8B62D;
            }
          }
        }
      }
    }
    .pandect-center{
      width: 711px;
      height: 785px;
      background: #0D96CC;
    }
    .pandect-right{
      width: 510px;
      height: 820px;
      background: #00a680;
    }
  }
</style>
