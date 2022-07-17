<template>
  <el-form :model="ruleForm" :rules="rules" label-position="left" ref="ruleForm" label-width="120px"
    class="demo-ruleForm">
    <el-form-item label="*  用户类型" prop="type">
      <el-select v-model="ruleForm.type" style="width: 100%">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="*  手机号码" prop="phone">
      <el-input type="text" v-model="ruleForm.phone" placeholder="请填写手机号码"></el-input>
    </el-form-item>
    <el-form-item label="*  登录密码" prop="pwd">
      <el-input type="password" v-model="ruleForm.pwd" placeholder="请填写登录密码"></el-input>
    </el-form-item>
    <el-form-item label="*  手机验证码" prop="code">
      <el-col :span="15">
        <el-input type="password" v-model="ruleForm.code" style="width: 182px" placeholder="请填写验证码"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button class="code" type="primary" @click="send">
          {{ !isClick ? `${countdownTime}s` : '获取验证码' }}
        </el-button>
      </el-col>
    </el-form-item>
    <el-button type="primary" class="submit" @click="submitForm('ruleForm')">注册</el-button>
    <div class="agreement">
      <el-checkbox v-model="checked"></el-checkbox>
      <div class="remark">
        同意并接受
        <a href="#" @click="showPop">《用户协议》</a>
        及
        <a href="#">《隐私权保护说明》</a>
      </div>
    </div>
    <!--协议第一步-->
    <agreement ref="agreement" @next="next()"></agreement>
    <!--协议第二步（信息录入）-->
    <entering ref="entering" @next="nextThree()"></entering>
    <!-- 协议第三步(入录指标) -->
    <entryMetrics ref="entryMetricsRef"></entryMetrics>
    <!-- 企业协议查询 -->
    <enterpriseMetrics ref="enterpriseMetricsRef"></enterpriseMetrics>
  </el-form>
</template>
<script>
import agreement from "./agreement";
import Entering from "./entering";
import entryMetrics from './entryMetrics'
import enterpriseMetrics from './enterpriseMetrics'
export default {
  name: "register",
  components: {
    Entering,
    agreement,
    entryMetrics,
    enterpriseMetrics
  },
  data() {
    var validateType = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请选择活动区域'));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      const phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (value === '') {
        callback(new Error('请输入11位手机号'));
      } else if (!phoneReg.test(value)) {
        return callback(new Error('请输入正确的手机号'));
      } else {
        callback();
      }
    };
    var validateCodeMsg = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入短信验证码'));
      } else {
        callback();
      }
    };
    var validatePwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    var validatePwdTwo = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.pwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      countdownTime: 60,
      isClick: true,
      checked: true,
      ruleForm: {
        type: '',
        phone: '',
        pwd: '',
        code: ''
      },
      rules: {
        type: [
          { validator: validateType, trigger: 'change' }
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        pwd: [
          { validator: validatePwd, trigger: 'blur' }
        ],
        code: [
          { validator: validateCodeMsg, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    send() {
      if (!this.isClick) return
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
          this.$emit('affirm', '1')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showPop() {
      this.$refs.agreement.init()
    },
    next() {
      this.$refs.entering.init()
    },
    nextThree() {
      // this.$refs.enterpriseMetricsRef.init()
      this.$refs.entryMetricsRef.init()
    }
  }
}
</script>

<style scoped lang="scss">
/deep/ .el-form-item__label {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #1ADCFF;
  line-height: 52px;
}

/deep/ .el-input__inner {
  width: 100%;
  height: 48px;
  border: 1px solid #1489CC;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0);
  color: #ffffff;
}

.el-form-item {
  margin-bottom: 30px;
}

.code {
  width: 120px;
  height: 48px;
  border-radius: 4px;
}

.submit {
  width: 100%;
  height: 52px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #02389B;
  line-height: 52px;
  padding: 0;
  margin-top: 44px;
}

.el-button--primary {
  background: #1ADCFF;
  border-color: #1ADCFF;
}

.agreement {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #0D96CC;
  margin-top: 28px;

  a {
    color: #0D96CC;
  }

  /*/deep/.el-checkbox__inner{*/
  /*    background-color: #1ADCFF;*/
  /*    border-color: #1ADCFF;*/
  /*}*/
}
</style>
