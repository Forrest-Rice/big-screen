<template>
  <div class="popupAgreement" v-if="isShow">
      <div class="popup-content">
        <img class="close-btn" src="../../../assets/img/pop-close.png" @click="close"/>
        <div class="popTitle">
          <div class="t">企业备案须知</div>
          <img class="titleLine" src="../../../assets/img/biaoqian@2x.png"/>
        </div>
        <div class="popRemark">
          <p>为配合甘肃省水利厅加强对全省水利工程建设市场的规范管理，共同维护全省水利工程建设市场秩序，现就有关网上备案事宜要求如下:</p>
          <p>1、企业在自愿申请市场告知性备案中提供的所有资料均是真实有效的，无虚假和制假资料。</p>
          <p>2、企业所委派人员均为本企业正式聘任的工作人员或执业人员，其经营和执业中所发生的一切行为，均由本企业负责。</p>
          <p>3、企业在甘从事水利工程建设项目时不得涂改、倒卖、出租、出借或者以其他形式非法转让建筑业企业资质、资格证书;不得以分支机构、
            办事处名义对外经营，不允许他人挂靠以本企业的名义等方式从事执业活动。</p>
          <p>4、保证严格履行投标或承包经营承诺，确保执业人员持证上岗，人证相符，到岗履职。</p>
          <p>5、近三年来本企业未发生过住建部令第159号第二十-条所列的12种行为和第二+九条所列的4种情形。</p>
          <p>6、自愿接受和遵守相关水利行业协会的章程和行业自律公约。</p>
          <p>以上内容不因企业法定代表人、主要技术负责人及其他有关事项的变更而改变，并自愿接受有关部门]及社会各界的监督，如有违反，自愿
            接受有关部]的依法处理，并承担相应后果。</p>
        </div>
        <div class="bottom">
          <el-checkbox v-model="checked"></el-checkbox>
          <span class="b-f">同意以上协议</span>
        </div>
        <el-button type="primary" :disabled="checked?false:true" class="btn" @click="next()">下一步</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: "agreement",
  data() {
    return {
      isShow:false,
      checked:false
    }
  },
  methods:{
    next() {
      this.isShow = false
      this.$emit('next')
    },
    init(){
      this.isShow = true
    },
    close() {
      this.isShow = false
    }
  }
}
</script>

<style scoped lang="scss">
  .popupAgreement{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    .popup-content{
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      position: relative;
      width: 1201px;
      height: 751px;
      background: url("../../../assets/img/sekuai@2x.png") no-repeat;
      background-size: 100% 100%;
      .close-btn{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 58px;
        height: 58px;
        cursor: pointer;
      }
      .popTitle{
        position: relative;
        width: 421px;
        height: 120px;
        font-size: 32px;
        font-weight: 500;
        color: #1ADCFF;
        line-height: 120px;
        text-align: center;
        .titleLine{
          width: 100%;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-45%);
        }
      }
      .popRemark{
        width: 1085px;
        min-height: 200px;
        font-size: 18px;
        font-weight: 400;
        font-family: '宋体';
        color: #1ADCFF;
        line-height: 30px;
      }
      .bottom{
        margin-top: 80px;
        .b-f{
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(26, 220, 255, 0.5);
          line-height: 38px;
        }
      }
      .btn{
        position: absolute;
        right: 45px;
        bottom: 40px;
      }
    }
  }
</style>
