<template>
  <div class="entryMetrics-box" v-if="dialogVisible">
    <div class="enterContent">
      <img class="close-btn" src="@/assets/img/pop-close.png" @click="close" />
      <div class="popTitle">
        <div class="t">园区入录指标</div>
        <span class="small-title">2022年指标详情</span>
        <img class="titleLine" src="@/assets/img/biaoqian2.png" />
      </div>
      <header>
        <div class="operate-button-box">
          <el-button
            class="operate-botton-item"
            v-for="(item, index) in operateList"
            :key="index"
            type="primary "
            @click="changeOperate(index)"
          >
            {{ item }}
          </el-button>
        </div>
      </header>
      <main>
        <div class="left-box">
          <div class="title-row">
            <div class="title" v-for="(item, index) in titleList" :key="index">
              {{ item.label }}
            </div>
          </div>
          <div
            class="content-row"
            v-for="(item, index) in indicatorList[0]"
            :key="index"
          >
            <el-checkbox class="content" v-model="item.check">
              <div>
                <el-image
                  class="indicator-image"
                  :src="tishiImage"
                  fit="cover"
                ></el-image>
                <span class="indicator-code">{{ item.indicatorCode }}</span>
              </div>
            </el-checkbox>
            <div class="content">
              <el-input
                class="indicator-input"
                suffix-icon="el-icon-edit"
                v-model="item.indicatorName"
                placeholder="Please input"
              />
            </div>
            <div class="content">
              <span class="indicator-data">{{ item.indicatorData }}</span>
            </div>
            <div class="content">
              <span class="indicator-unit">{{ item.indicatorUnit }}</span>
            </div>
          </div>
        </div>
        <div class="right-box">
          <div class="title-row">
            <div class="title" v-for="(item, index) in titleList" :key="index">
              {{ item.label }}
            </div>
          </div>
          <div
            class="content-row"
            v-for="(item, index) in indicatorList[1]"
            :key="index"
          >
            <el-checkbox v-model="item.check">
              <div class="content">
                <el-image
                  class="indicator-image"
                  :src="tishiImage"
                  fit="cover"
                ></el-image>
                <span class="indicator-code">{{ item.indicatorCode }}</span>
              </div>
            </el-checkbox>
            <div class="content">
              <el-input
                class="indicator-input"
                suffix-icon="el-icon-edit"
                v-model="item.indicatorName"
                placeholder="Please input"
              />
            </div>
            <div class="content">
              <span class="indicator-data">{{ item.indicatorData }}</span>
            </div>
            <div class="content">
              <span class="indicator-unit">{{ item.indicatorUnit }}</span>
            </div>
          </div>
        </div>
      </main>

      <footer class="btn-next">
        <div class="foot-content-box">
          <span class="footer-title">特别说明：</span>
          <span class="footer-content"
            >五好园区建设进度（033）≤100%；利润总额（046）＜营业收入（045）；税收总额（047）＜营业收入（045）；工业增长值（048）＜工业总产值（043）
            指标最多新增3个，删除10个</span
          >
        </div>
        <div class="footer-button-box">
          <el-button type="primary" @click="save">保存</el-button>
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </div>
      </footer>
    </div>

    <!-- 单个删除弹窗 -->
    <!-- <deleteMetrics ref="addMetricsRef" /> -->
    <!-- 提交成功弹窗 -->
    <!-- <submitSucceed
      ref="submitSucceedRef"
      @submitSucceed="submitSucceed"
    ></submitSucceed> -->
  </div>
</template>
<script>
// import deleteMetrics from "./deleteMetrics";
// import submitSucceed from "./submitSucceed";
export default {
  name: "entryMetrics",
  data() {
    return {
      dialogVisible: false,
      operateList: ["新增指标", "删除指标", "全选", "区级"],
      operateFlag: 0,
      leftTableData: [],
      rightTableData: [],
      titleList: [
        { label: "指标代码", span: 5 },
        { label: "指标名称", span: 9 },
        { label: "指标数据", span: 5 },
        { label: "指标单位", span: 5 },
      ],
      tishiImage: require("@/assets/img/userAgreement/tishi.png"),
      indicatorList: [],
    };
  },
  //   components: { deleteMetrics, submitSucceed },
  created() {
    const temp = [];
    const temp2 = [];
    for (let index = 0; index < 20; index++) {
      temp.push({
        indicatorCode: `${index}left`,
        indicatorName: "aa",
        indicatorData: "22",
        indicatorUnit: "亿元",
        check: false,
      });
      temp2.push({
        indicatorCode: `${index}right`,
        indicatorName: "aa",
        indicatorData: "22",
        indicatorUnit: "亿元",
        check: false,
      });
    }
    this.indicatorList = [temp, temp2];
  },
  methods: {
    next() {},
    init() {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
    },
    changeOperate(val) {
      const allSelect = () => {
        this.indicatorList.forEach((element) => {
          element.forEach((eleItem) => {
            eleItem.check = true;
          });
        });
      };

      const add = () => {
        this.$refs.addMetricsRef.init();
      };

      const funMap = new Map().set(2, allSelect).set(1, add);
      funMap.get(val).call();
      this.operateFlag = val;
    },
    save() {
      this.close();
    },

    /**
     * @description: 提交方法
     * @return {*}
     */
    submit() {
      // 提交错误
      // this.$emit('submitError')
      // this.close()
      // 提交成功
      this.$refs.submitSucceedRef.init();
    },
    back() {
      this.close();
    },
    submitSucceed() {
      this.dialogVisible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.entryMetrics-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;

  .enterContent {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 1200px;
    height: 1020px;
    background: rgba(2, 56, 152, 0.6);
    border: 1px solid #1a8bff;
    border-radius: 10px;
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 58px;
    height: 58px;
    cursor: pointer;
  }

  .popTitle {
    position: relative;
    width: 505px;
    height: 80px;
    font-size: 32px;
    font-weight: 500;
    color: #1adcff;
    line-height: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .titleLine {
      width: 100%;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-45%);
    }

    .small-title {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #1adcff;
      line-height: 20px;
      position: absolute;
      bottom: -11px;
    }
  }

  header {
    width: calc(100% - 64px);
    padding: 0 32px;
    justify-content: flex-start;
    margin-top: 15px;

    .operate-button-box {
      display: flex;
      align-items: center;
    }

    ::v-deep .operate-botton-item {
      cursor: pointer;
      margin: 0 5px;
      width: 95px;
      height: 35px;
      border: 1px solid #1adcff;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #023898;

      span {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #1adcff;
      }

      &:active {
        background: #1adcff;

        span {
          color: #ffffff;
        }
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &.click {
        background: #1adcff;
        color: #ffffff;
      }
    }
  }

  main {
    width: calc(100% - 64px);
    display: flex;
    height: 54%;
    justify-content: space-between;
    margin-top: 30px;

    overflow-y: auto;

    .left-box {
      width: 44%;
      height: 100%;
    }

    .right-box {
      width: 44%;
      height: 100%;
    }

    .title-row {
      display: flex;

      .title {
        width: 80px;
        height: 32px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #1adcff;
        line-height: 20px;
        margin: 0 11px 10px 11px;
        display: flex;
        align-items: center;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }

        &:nth-child(2) {
          width: 172px;
        }
      }
    }

    .content-row {
      display: flex;

      ::v-deep .el-checkbox {
        display: flex;
        align-items: center;
      }

      .content {
        width: 80px;
        height: 32px;
        border: 1px solid #1adcff;
        margin: 10px;
        display: flex;
        align-items: center;

        &:first-child {
          border: none;
          margin-left: 0;
        }

        &:nth-child(2) {
          width: 172px;
        }

        .indicator-image {
          width: 18px;
          height: 18px;
        }

        .indicator-code {
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #1adcff;
          margin-left: 12px;
        }

        ::v-deep .indicator-input {
          .el-input__inner {
            width: 172px;
            height: 32px;
            border: none;
          }

          .el-input__icon {
            color: #1adcff;
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .indicator-data {
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .indicator-unit {
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #1adcff;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      }

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  footer {
    width: calc(100% - 0.33rem);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 0.05rem;
    position: absolute;
    bottom: 0.17rem;
    flex-direction: column;

    .foot-content-box {
      display: flex;
      flex-direction: column;
      padding-bottom: 65px;
    }

    .footer-title,
    .footer-content {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #1adcff;
      line-height: 30px;
    }

    .footer-content {
      font-weight: 500;
    }

    .footer-button-box {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
