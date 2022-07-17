<!--
 * @Author: By
 * @Date: 2022-07-17 15:10:23
 * @LastEditTime: 2022-07-17 19:24:14
 * @LastEditors: By
 * @Description: 企业指标 -指标4 改版
 * @FilePath: \big-screen\src\views\login\module\enterpriseMetrics.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="enterprise-metrics-box" v-if="dialogVisible">
    <div class="enterContent">
      <header>
        <el-form :inline="true" :model="formInline" class="search-criteria">
          <el-form-item label="企业名称:">
            <el-input v-model="formInline.businessName"></el-input>
          </el-form-item>
          <el-form-item label="企业联系人:">
            <el-input v-model="formInline.businessContact"></el-input>
          </el-form-item>
          <el-form-item label="审核状态:">
            <el-select v-model="formInline.state">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="formInline" class="search-criteria">
          <el-form-item label="审核状态:">
            <el-select v-model="formInline.state">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-image class="close-btn" @click="close" :src="closeImgae" fit="cover"></el-image>
      </header>
      <main>
        <div class="main-top">
          <div class="operate-botton-box">
            <div class="operate-botton" :class="operateFlag === index ? 'click' : ''"
              v-for="(item, index) in operateList" :key="index" @click="changeOperate(index)">{{ item }}</div>
          </div>
          <div class="search-opearte-box">
            <div class="download-box">
              <el-image class="download-image" :src="xiazaiImage" fit="cover"></el-image>
              <span class="download-span">下载附件</span>
            </div>
            <el-button class="search-botton" type="primary">查询</el-button>
          </div>
        </div>
        <div class="main-body">
          <el-table ref="tableRef" class="main-table" :data="tableData" :border="false" :row-class-name="rowClassFun"
            :header-row-class-name="headerClassFun" :highlight-current-row="false" :stripe="false">
            <el-table-column type="selection" width="75" />
            <el-table-column prop="date" label="指标名称" />
            <el-table-column prop="name" label="企业名称" />
            <el-table-column prop="address" label="指标数据" />
            <el-table-column prop="address" label="指标状态" />
          </el-table>
        </div>
        <el-pagination background class="teble-page" :current-page="1" layout="prev, pager, next" :total="60">
        </el-pagination>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      formInline: {
        businessName: '',
        businessContact: '',
        state: ''
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      operateList: ['新增指标', '修改', '提交', '删除'],
      operateFlag: 0,
      xiazaiImage: require('@/assets/img/userAgreement/xiazai.png'),
      closeImgae: require('@/assets/img/pop-close.png'),
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
    }
  },
  methods: {
    init() { this.dialogVisible = true },
    rowClassFun() { return 'row' },
    headerClassFun() { return 'header' },
    handleSizeChange() { },
    handleCurrentChange() { },
    changeOperate(val) { this.operateFlag = val },
    close() { this.dialogVisible = false }
  },
};
</script>

<script setup>

</script>
<style lang="scss" scoped>
.enterprise-metrics-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
  z-index: 2000;


  .enterContent {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 1271px;
    height: 752px;
    background: rgba(2, 56, 152, 0.6);
    border: 1px solid #1A8BFF;
    border-radius: 10px;
    padding: 27px 34px 34px 21px;
  }

  header {
    width: 100%;
    height: 100px;
    position: relative;

    ::v-deep .search-criteria {
      width: 100%;
      display: flex;

      .el-form-item {
        margin: 0 40px;
        display: flex;
        align-items: center;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }

      .el-form-item__label {
        padding-right: 20px;
      }

      .el-input__inner {
        width: 190px;
        height: 35px;
        border: 1px solid #1ADCFF;
        border-radius: 0;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #1ADCFF;
      }

      .el-select {
        .el-input__inner {
          text-align: center;
        }
      }
    }

    .close-btn {
      cursor: pointer;
      position: absolute;
      width: 58px;
      height: 58px;
      right: 0;
      top: 0;
    }
  }

  main {
    width: 100%;
    margin-top: 21px;
    height: 652px;
    display: flex;
    flex-direction: column;
    background: #000F60;
    position: relative;

    .main-top {
      padding: 21px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .operate-botton-box {
      display: flex;
    }

    .operate-botton {
      width: 95px;
      height: 35px;
      border: 1px solid #1ADCFF;
      border-radius: 4px;
      margin: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #1ADCFF;
      line-height: 37px;
      cursor: pointer;


      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &.click {
        background-color: #1ADCFF;
        color: #FFFFFF;
      }
    }

    .search-opearte-box {
      display: flex;
      align-items: center;

      .download-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        .download-image {
          width: 37px;
          height: 27px;
        }

        .download-span {
          margin-top: 11px;
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #1ADCFF;
          line-height: 20px;
        }
      }

      ::v-deep .search-botton {
        margin-left: 76px;
        width: 120px;
        height: 48px;
        background: #1ADCFF;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          font-size: 24px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #02389B;
          line-height: 38px;
        }
      }
    }

    .main-body {
      background-color: #000F60;
      height: 550px;

      ::v-deep .main-table {
        background-color: #000F60;
        height: 500px;

        &:before {
          display: none;
        }

        .row {
          background-color: #000F60;

          td {
            border: none;
            border-collapse: separate;
            background: none;

            &:first-child {
              .cell {
                display: flex;
                justify-content: center;
              }

            }
          }

          .cell {
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: rgba(26, 220, 255, 0.5);
            line-height: 41px;
          }
        }

        .header {
          th {
            background: #022C76;
            border: none;

            &:first-child {
              .cell {
                display: flex;
                justify-content: center;
              }

            }
          }

          .cell {
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #1ADCFF;
            line-height: 41px;


          }

        }
      }
    }

    ::v-deep .teble-page {
      position: absolute;
      bottom: 21px;
      right: 21px;

      .btn-prev,
      .btn-next {
        width: 28px;
        height: 28px;
        background-color: rgba(26, 220, 255, 0.2000);
      }

      .number {
        width: 28px;
        height: 28px;
        background: rgba(26, 220, 255, 0.2000);


        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 28px;
      }

      .active {

        background-color: #1ADCFF !important;
        color: #000F60 !important;
      }
    }
  }
}
</style>