<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
    <el-form-item prop="phone">
      <el-input type="" v-model="ruleForm.phone" autocomplete="off" placeholder="请输入手机号">
        <i slot="prefix" class="icon">
          <img class="icon-img" src="../../../assets/img/name.png" alt="">
          <div class="line"></div>
        </i>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <div style="display: flex;justify-content: space-between">
        <div style="width: 262px">
          <el-input class="codeInput" type="password" v-model="ruleForm.code" placeholder="验证码"></el-input>
        </div>
        <div class="code" @click="send">
          {{!isClick?`${countdownTime}s`:'获取验证码'}}
        </div>
      </div>
    </el-form-item>

    <el-button type="primary" class="login-button" @click="submitForm('ruleForm')">登录</el-button>
  </el-form>
</template>

<script>
export default {
  name:'auth',
  data() {
    var validatePhone = (rule, value, callback) => {
      const phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (value === '') {
        callback(new Error('请输入手机号'));
      } else if (!phoneReg.test(value)) {
        return callback(new Error('请输入正确的手机号'));
      } else {
        callback();
      }
    };
    return {
      countdownTime: 60,
      isClick: true,
      ruleForm: {
        phone: '',
        pwd: '',
      },
      rules:{
        phone: [
          {validator: validatePhone, trigger: 'blur'}
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    send() {
      if (!this.isClick)return
      this.isClick = false
      this.countdown()
    },
    //倒计时
    countdown() {
      clearInterval(timer)
      this.countdownTime = 60
      let timer = setInterval(() => {
        if (this.countdownTime > 0) {
          this.countdownTime--
        } else {
          this.isClick = true;
          clearInterval(timer)
        }
      }, 1000)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('affirm','2')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style scoped lang="scss">
.el-form{
  margin-top: 50px;
}
::v-deep.el-input__inner{
  width: 442px;
  height: 56px;
  border: 1px solid #1489CC;
  border-radius: 4px;
  background: rgba(255,255,255,0);
  color: #ffffff;
  padding-left: 87px;
}
.el-form-item{
  margin-bottom: 48px;
}
.icon{
  position: relative;
  display: block;
  height: 100%;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon-img{
    width: 26px;
    height: 26px;
  }
  .line{
    position: absolute;
    top:18px;
    right: -1px;
    content: '';
    width: 2px;
    height: 20px;
    border-left: 1px solid #0071D4;
  }
}
.message{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
  margin-top: -15px;
  .msg{
    font-size: 16px;
    font-weight: 400;
    color: #FF4343;
  }
  .forget{
    cursor: pointer;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #1AD1FF;
  }
}
.login-button{
  width: 100%;
  height: 52px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #02389B;
  line-height: 52px;
  padding: 0;
  margin-top: 34px;
}
.el-button--primary{
  background: #1ADCFF;
  border-color: #1ADCFF;
}
.codeInput{
  ::v-deep.el-input__inner{
    width: 100%;
    padding-left: 25px;
  }
}
.code{
  cursor: pointer;
  width: 161px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  border: 1px solid #1489CC;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #1ADCFF;
}
</style>
