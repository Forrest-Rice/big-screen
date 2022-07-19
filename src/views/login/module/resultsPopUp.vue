<!--
 * @Author: By
 * @Date: 2022-07-19 08:51:01
 * @LastEditTime: 2022-07-19 23:03:59
 * @LastEditors: By
 * @Description: 操作状态弹窗
 * @FilePath: \big-screen\src\views\login\module\resultsPopUp.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
  <div class="results-pop-up-box" v-if="dialogVisible">
    <div ref="enterContentRef" class="enterContent">
      <!-- 审核失败 -->
      <!-- <el-image v-if="type === 'auditFailed'" class="audit-failed-image" :src="auditFailedImage" fit="contain" /> -->
      <!-- 入录失败 -->
      <!-- <el-image v-else-if="type === 'entryFailed'" class="audit-failed-image" :src="entryFailImage" fit="contain" /> -->
      <!-- 审核通过 -->
      <!-- <el-image v-else-if="type === 'auditSucceed'" class="audit-failed-image" :src="approvedImage" fit="contain" /> -->
      <!-- 入录成功 -->
      <!-- <el-image v-else-if="type === 'entrySucceed'" class="audit-failed-image" :src="entrySucceedImage" fit="contain" /> -->
      <el-image class="audit-failed-image" :src="type.image" fit="contain" />
      <header>
        <el-image class="close-btn" @click="close" :src="closeImage" fit="cover"></el-image>
      </header>
      <main>
        <!-- <span class="main-span" v-if="type === 'auditFailed'">抱歉审核不通过</span>
        <span class="main-span" v-else-if="type === 'entryFailed'">抱歉!入录失败</span>
        <span class="main-span" v-else-if="type === 'auditSucceed'">审核通过</span>
        <span class="main-span" v-else-if="type === 'entrySucceed'">入录成功</span> -->
        <span class="main-span">{{ type.title }}</span>
      </main>
      <footer>
        <el-button v-if="type.buttonType === 'fail' && type.buttonFlag" class="footer-button" type="primary">
          返回修改
        </el-button>
        <el-button v-else-if="type.buttonType === 'success' && type.buttonFlag" class="footer-button" type="primary">
          确定
        </el-button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'resultsPopUp',
  data() {
    return {
      dialogVisible: false,
      closeImage: require('@/assets/img/pop-close.png'),
      type: {},
      flagList: [
        // 审核失败
        {
          flag: 'auditFailed', buttonType: 'fail', buttonFlag: true, height: 1.9, width: 2.5, title: '抱歉审核不通过',
          image: require('@/assets/img/userAgreement/auditFailedBg.png')
        },
        // 入录失败
        {
          flag: 'entryFailed', buttonType: 'fail', buttonFlag: false, height: 1.43, width: 2.5, title: '抱歉!入录失败',
          image: require('@/assets/img/userAgreement/entryFailBg.png')
        },
        // 审核通过
        {
          flag: 'auditSucceed', buttonType: 'success', buttonFlag: true, height: 1.9, width: 2.6, title: '审核通过',
          image: require('@/assets/img/userAgreement/approvedBg.png')
        },
        // 入录成功
        {
          flag: 'entrySucceed', buttonType: 'success', buttonFlag: false, height: 1.43, width: 2.5, title: '入录成功',
          image: require('@/assets/img/userAgreement/entrySuccessful.png')
        },
        // 等待审核
        {
          flag: 'waitReview', buttonType: '', buttonFlag: false, height: 2.02, width: 3.13, title: '信息录入成功，请等待管理员审核',
          image: require('@/assets/img/userAgreement/waitReview.png')
        },
      ]
    }
  },
  methods: {
    init(flag) {

      this.type = this.flagList.find(e => e.flag === flag)
      this.dialogVisible = true


      this.$nextTick(() => {
        this.$refs.enterContentRef.style.height = `${this.type.height}rem`
        this.$refs.enterContentRef.style.width = `${this.type.width}rem`
      })

    },
    close() {
      this.dialogVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
.results-pop-up-box {
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
    width: 600px;
    height: 388px;
    border-radius: 10px;
    overflow: hidden;
    // background: rgba(2, 56, 152, 0.6);


    ::v-deep .audit-failed-image {
      position: absolute;
      width: 100%;
      // width: auto;
      height: 100%;
      top: 0;
      left: 0;
    }

    header {
      position: relative;
      z-index: 2002;
      width: 100%;
      display: flex;
      height: 48px;

      ::v-deep .close-btn {
        width: 48px;
        height: 48px;
        position: absolute;
        top: 26px;
        right: 19px;
        // margin: 26px 19px;
        cursor: pointer;
      }
    }

    main {
      width: 100%;
      z-index: 2001;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;

      .main-span {
        margin-top: 30%;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #05FFFF;
        line-height: 33px;
      }
    }

    footer {
      width: 100%;
      position: relative;
      z-index: 2001;
      display: flex;
      justify-content: center;
      align-items: center;

      ::v-deep .footer-button {
        width: 317px;
        height: 44px;
        background: #1ADCFF;
        border-radius: 4px;
        margin-bottom: 32px;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          width: 71px;
          height: 18px;
          font-size: 18px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #0A3D75;
        }
      }
    }
  }
}
</style>