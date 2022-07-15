<template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="account">
            <el-input type="" v-model="ruleForm.account" autocomplete="off" placeholder="请输入用户名">
                <i slot="prefix" class="icon">
                    <img class="icon-img" src="../../../assets/img/name.png" alt="">
                    <div class="line"></div>
                </i>
            </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
            <el-input type="password" v-model="ruleForm.pwd" autocomplete="off" placeholder="请输入用户密码">
                <i slot="prefix" class="icon">
                    <img class="icon-img" src="../../../assets/img/pwd.png" alt="">
                    <div class="line"></div>
                </i>
            </el-input>
        </el-form-item>
        <div class="message">
            <div class="msg">
<!--              <span>用户名或密码错误，请重新输入</span>-->
            </div>
            <div class="forget" @click="forget">忘记密码？</div>
        </div>
        <el-button type="primary" class="login-button" @click="submitForm('ruleForm')">登录</el-button>
    </el-form>
</template>

<script>
    export default {
        name:'login-account',
        data() {
            return {
                ruleForm: {
                    account: '',
                    pwd: '',
                },
                rules:{
                    account: [
                        { required: true, message: '请输入用户名', trigger: 'change' }
                    ],
                    pwd: [
                        { required: true, message: '请输入用户密码', trigger: 'change' }
                    ],
                }
            };
        },
        methods: {
            forget() {
              this.$emit('forget')
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
    }
    .el-button--primary{
        background: #1ADCFF;
        border-color: #1ADCFF;
    }
</style>
