<template>
    <div class="login">
        <!--账号密码登录-->
        <div class="login-form" v-if="state == 1">
            <div class="title">
                <div class="name">账号密码登录</div>
                <div class="tab" @click="state = 2">
                    <span>短信快捷登录</span>
                    <img src="../../assets/img/login_right.png" alt="">
                </div>
            </div>
            <div class="form">
                <login-account @forget="state = 4" @affirm="affirm"></login-account>
            </div>
            <div class="bottom">
                <span class="bottom-item" @click="state = 5">扫一扫登录</span>
                <span class="bottom-item" @click="state = 3">立即注册</span>
            </div>
        </div>
        <!--验证码登录-->
        <div class="login-form" v-if="state == 2">
          <div class="title">
            <div class="name">短信快捷登录</div>
            <div class="tab"  @click="state = 1">
              <span>账号密码登录</span>
              <img src="../../assets/img/login_right.png" alt="">
            </div>
            <div class="title-remark">验证即登录，未注册将自动创建账号</div>
          </div>
          <div class="form">
            <auth @affirm="affirm"></auth>
          </div>
          <div class="bottom">
            <span class="bottom-item" @click="state = 5">扫一扫登录</span>
            <span class="bottom-item" @click="state = 3">立即注册</span>
          </div>
        </div>
        <!--注册-->
        <div class="login-form" v-if="state == 3">
            <register @affirm="affirm"></register>
        </div>
        <!--忘记密码-->
        <div class="login-form" v-if="state == 4">
          <forget></forget>
        </div>
        <!--扫码登录-->
        <div class="login-form" v-if="state == 5">
          <scan></scan>
          <div class="bottom">
            <span class="bottom-item" @click="state = 1">账号密码登录</span>
            <span class="bottom-item" @click="state = 2">手机号登录</span>
          </div>
        </div>
        <!-- 弹窗 -->
        <pop :type="type" v-if="pop" @close="pop = false" @change="popChange"></pop>
    </div>
</template>

<script>
    import LoginAccount from "./module/login-account";
    import Register from "./module/register";
    import Forget from "./module/forget";
    import Auth from "./module/auth";
    import Scan from "./module/scan";
    import Pop from "./module/pop";
    export default {
        name: "login",
        components: {Pop, Scan, Auth, Forget, Register, LoginAccount},
        data() {
          return {
            pop:false, //弹窗状态
            type:'1', //1 注册成功 2 登录成功
            state:1   //1 账号密码登录  2 验证码登录 3 注册 4 忘记密码 5 扫码登录
          }
        },
        methods:{
          affirm(val) {
            this.type = val
            this.pop = true
          },
          popChange() {
            this.pop = false
            this.$router.push('/home/pandect')
          }
        }
    }
</script>

<style scoped lang="scss">
    .login{
        position: relative;
        width: 100%;
        height: 100%;
        background: no-repeat url("../../assets/img/login_bg.png");
        //background: RGBA(2, 47, 129, 1);
        background-size: 100%;
        .login-form{
            position: absolute;
            top: 255px;
            right: 344px;
            width: 552px;
            height: 545px;
            box-sizing: border-box;
            padding: 47px 55px;
            background: no-repeat url("../../assets/img/login_form_bg.png");
            background-size: 100% 100%;
            .title{
              position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .name{
                    font-size: 24px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(5, 255, 255, 0.5);
                    line-height: 42px;
                }
                .tab{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    span{
                        display: block;
                        font-size: 18px;
                        font-family: Source Han Sans CN;
                        font-weight: 400;
                        color: #05FFFF;
                        line-height: 42px;
                    }
                    img{
                        width: 9px;
                        height: 14px;
                        margin-left: 9px;
                    }
                }
                .title-remark{
                  position: absolute;
                  left: 0;
                  top: 44px;
                  font-size: 16px;
                  font-weight: 400;
                  color: rgba(5, 255, 255, 0.5);
                }
            }
            .bottom{
                position: absolute;
                bottom: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 64px;
                box-sizing: border-box;
                padding: 0 55px;
                border-top: 1px solid rgba(26, 220, 255, 0.2);
                .bottom-item{
                    font-size: 18px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #05FFFF;
                    line-height: 42px;
                    cursor: pointer;
                }
            }
        }
        input::input-placeholder{color:  #17A1E6;}
        ::-webkit-input-placeholder { /* WebKit browsers */
          color: #17A1E6;
        }
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
          color: #17A1E6;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19  */
          color: #17A1E6;
        }
        :-ms-input-placeholder { /* Internet Explorer 10  */
          color: #17A1E6;
        }

    }
</style>
