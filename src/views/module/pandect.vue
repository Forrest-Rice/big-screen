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
            <span><span class="money">1000</span>亿元</span><br />
            <span>主营业务收入</span>
          </div>
          <pie3d></pie3d>
        </div>
      </div>
    </div>
    <div class="pandect-center"></div>
    <div class="pandect-right">
      <div class="progress-bar-box">
        <div class="progress-main">
          <div class="progress" />
        </div>
        <span class="progress-value">65%</span>
      </div>
      <span class="pandect-title">五好园区建设进度</span>
      <div class="data-overview-box">
        <div
          class="data-overview-item"
          v-for="(item, index) in dataOverViewList"
          :key="index"
        >
          <el-image
            class="data-overview-bg"
            :src="item.bg"
            fit="cover"
          ></el-image>
          <div class="data-box">
            <span class="data">
              {{ item.value }}
              <span class="data-unit">{{ item.unit }}</span>
            </span>
            <span class="data-title">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 文字弹框样式 -->
    <tips
      :imgPath="'pwd.png'"
      :btnType="2"
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

    <!-- 管理部门 -->
    <management ref="managementRef" />
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
import DataRank from "../../components/data-rank";
import MapZoning from "../../components/map-zoning";
import tips from "../../components/tips";
import PopFaile from "../../components/popup/pop-faile";
import PopPass from "../../components/popup/pop-pass";
import PopFaileTwo from "../../components/popup/pop-faile-two";
import PopPassTwo from "../../components/popup/pop-pass-two";
import PopEnd from "../../components/popup/pop-end";
import management from "@/views/module/managementPage";
export default {
  name: "pandect",
  components: {
    PopEnd,
    PopPassTwo,
    PopFaileTwo,
    PopPass,
    PopFaile,
    Pie3d,
    AcrossBar,
    tips,
    DataRank,
    MapZoning,
    management,
  },
  data() {
    return {
      dataOverViewList: [
        {
          label: "规划面积",
          bg: require("@/assets/img/pandect/planArea.png"),
          value: 55.5,
          unit: "亩",
        },
        {
          label: "亩均指数",
          bg: require("@/assets/img/pandect/mujunzhishu.png"),
          value: "44%",
          unit: "",
        },
        {
          label: "高新技术企业",
          bg: require("@/assets/img/pandect/gaoxinjishuqiye.png"),
          value: 152,
          unit: "家",
        },
        {
          label: "专精特新企业",
          bg: require("@/assets/img/pandect/zhunjingtexinqiye.png"),
          value: 134,
          unit: "家",
        },
        {
          label: "工业总产值",
          bg: require("@/assets/img/pandect/gongyezongchanzhi.png"),
          value: 464.02,
          unit: "亿元",
        },
        {
          label: "政府补贴",
          bg: require("@/assets/img/pandect/zhengfubutie.png"),
          value: 215.13,
          unit: "亿元",
        },
        {
          label: "营业收入",
          bg: require("@/assets/img/pandect/yingyeshouru.png"),
          value: 465.13,
          unit: "亿元",
        },
        {
          label: "利润总额",
          bg: require("@/assets/img/pandect/liyunzonge.png"),
          value: 312.07,
          unit: "亿元",
        },
        {
          label: "税收总额",
          bg: require("@/assets/img/pandect/suishouzonge.png"),
          value: 345.19,
          unit: "亿元",
        },
        {
          label: "工业增长值",
          bg: require("@/assets/img/pandect/industrialGrowth.png"),
          value: 312.07,
          unit: "亿元",
        },
        {
          label: "规上企业从业人数 ",
          bg: require("@/assets/img/pandect/congyerenshu.png"),
          value: 864310,
          unit: "人",
        },
        {
          label: "电耗",
          bg: require("@/assets/img/pandect/dianhao.png"),
          value: 341.01,
          unit: "万度",
        },
        {
          label: "能耗",
          bg: require("@/assets/img/pandect/nenghao.png"),
          value: 345.12,
          unit: "万度",
        },
        {
          label: "规上企业",
          bg: require("@/assets/img/pandect/guishangqiye.png"),
          value: 125,
          unit: "家",
        },
      ],
    };
  },
  mounted(){
    this.$refs.managementRef.init()
  },
  methods: {
    tipClose() {
      console.log("<>>>>>>>>>>tipClose");
    },
    tipChange() {
      console.log("<>>>>>>>>>>tipChange");
    },
  },
};
</script>

<style scoped lang="scss">
.pandect-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .pandect-left {
    .top10 {
      position: relative;
      box-sizing: border-box;
      padding: 13px 26px;
      width: 471px;
      height: 538px;
      background: url("../../assets/img/paimingbeijin@2x.png") no-repeat;
      background-size: 100% 100%;

      .letf-title {
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
      }

      .target {
        width: 418px;
        position: absolute;
        left: 0;
        top: 54px;
        text-align: right;
        font-size: 14px;
        font-weight: 400;
        color: #00b8ff;
      }
    }

    .Income {
      margin-top: 30px;
      width: 468px;
      height: 253px;
      background: no-repeat url("../../assets/img/pandect/sekuai2@2x.png");
      background-size: 100% 100%;

      .income_title {
        width: 100%;
        height: 45px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        line-height: 45px;
        text-align: center;
      }

      .income_pie {
        position: relative;
        width: 100%;
        height: 200px;

        .remarks {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 12px;
          font-weight: 400;
          color: #ffffff;
          line-height: 20px;
          text-align: center;

          .money {
            display: inline-block;
            margin-right: 10px;
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 600;
            color: #f8b62d;
          }
        }
      }
    }
  }

  .pandect-center {
    width: 711px;
    height: 785px;
    background: #0d96cc;
  }

  .pandect-right {
    width: 510px;
    height: 820px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
    position: relative;

    .progress-bar-box {
      width: 100%;
      height: 25px;
      position: relative;
      display: flex;
      align-items: center;

      .progress-main {
        width: calc(100% - 55px);
        height: 25px;
        background-color: #00b5fd;
        border-radius: 15px;
        position: relative;
        overflow: hidden;

        .progress {
          width: 65%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 15px;
          background-image: repeating-linear-gradient(
            -45deg,
            #009dfc,
            #009dfc 5px,
            #00f3fe 0,
            #00f3fe 7px
          );
        }
      }

      .progress-value {
        width: 55px;
        height: 25px;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #00b5fd;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
      }
    }

    .pandect-title {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-top: 15px;

      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #00b5fd;
    }

    .data-overview-box {
      margin-top: 47px;
      width: 100%;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      position: relative;

      .data-overview-item {
        width: 235px;
        height: 83px;
        margin: 11px 19px;
        position: relative;

        &:nth-child(odd) {
          margin-left: 0;
        }

        &:nth-child(even) {
          margin-right: 0;
        }

        &:nth-last-of-type(-n + 2) {
          margin-bottom: 0;
        }

        &:nth-child(-n + 2) {
          margin-top: 0;
        }

        ::v-deep .data-overview-bg {
          position: absolute;
          top: 0;
          left: 0;
        }

        .data-box {
          margin-left: 84px;
          height: 100%;
          display: flex;
          flex-direction: column;
          // align-items: center;
          justify-content: center;

          .data {
            font-size: 26px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #f8b62d;
            // line-height: 24px;
          }

          .data-unit {
            font-size: 12px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #ffffff;
          }

          .data-title {
            // margin-top: 8px;
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
