<template>
    <div class="entering" v-if="isShow">
        <div class="enterContent">
            <img class="close-btn" src="../../../assets/img/pop-close.png" @click="close"/>
            <div class="popTitle">
                <div class="t">录入企业、园区信息</div>
                <img class="titleLine" src="../../../assets/img/biaoqian2.png"/>
            </div>
            <div class="enterFrom">
                <div class="enterItem" v-for="(item,index) in formList" :key="index">
                    <img class="zd" src="../../../assets/img/zhongdian.png" alt="">
                    <div class="itemName">{{item.title}}</div>
                    <div class="select">
                        <el-select v-model="item.val" v-if="item.type == 'select'" :placeholder="item.placeholder">
                            <el-option
                                    v-for="item in item.option=='option'?options:options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <el-input v-model="item.val" v-if="item.type == 'input'"
                                  :placeholder="item.placeholder"></el-input>
                        <img class="required" src="../../../assets/img/require.png" alt="" v-if="item.require">
                        <img class="required" src="" alt="" v-else>
                    </div>
                    <div class="remark">
                        <img class="ts" src="../../../assets/img/tishi.png" alt="">
                        <div class="ts_f">{{ item.remark }}</div>
                    </div>
                </div>
                <div class="btn-next">
                    <el-button type="primary" @click="next()">下一步</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "entering",
        data() {
            return {
                isShow: false,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }],
                options2: [{
                    value: '选项3',
                    label: '黄金糕'
                }, {
                    value: '选项4',
                    label: '双皮奶'
                }],
                formList: [
                    {
                        title: '所在省份：',
                        label: 'provinces',
                        type: 'select',
                        option: 'option',
                        val: '',
                        require: true,
                        placeholder: '请选择省份',
                        remark: '请选择省份'
                    },
                    {
                        title: '所在城市：',
                        label: 'city',
                        type: 'select',
                        option: 'option2',
                        val: '',
                        require: true,
                        placeholder: '请选择城市',
                        remark: '请选择城市'
                    },
                    {
                        title: '企业名称：',
                        label: 'name',
                        type: 'input',
                        option: '',
                        val: '',
                        require: true,
                        placeholder: '请输入工商注册的企业名称',
                        remark: '请输入企业名称'
                    },
                    {
                        title: '注册地址：',
                        label: 'address',
                        type: 'input',
                        option: '',
                        val: '',
                        require: false,
                        placeholder: '请输入企业工商注册地址',
                        remark: '请输入注册地址'
                    },
                    {
                        title: '公司办公电话：',
                        label: 'phone',
                        type: 'input',
                        option: '',
                        val: '',
                        require: true,
                        placeholder: '请输入公司电话',
                        remark: '请输入你的联系电话'
                    },
                    {
                        title: '企业信用代码：',
                        label: 'code',
                        type: 'input',
                        option: '',
                        val: '',
                        require: false,
                        placeholder: '请输入企业信用代码',
                        remark: '请输入你的企业信用代码'
                    },
                    {
                        title: '联系人：',
                        label: 'contacts',
                        type: 'input',
                        option: '',
                        val: '',
                        require: true,
                        placeholder: '请输入联系人',
                        remark: '请输入联系人'
                    },
                    {
                        title: '手机号码：',
                        label: 'phoneNum',
                        type: 'input',
                        option: '',
                        val: '',
                        require: true,
                        placeholder: '必须是13或15打头',
                        remark: '请输入你的手机号'
                    },
                    {
                        title: '邮箱：',
                        label: 'email',
                        type: 'input',
                        option: '',
                        val: '',
                        require: true,
                        placeholder: 'XX@X.X（用于找回密码)',
                        remark: '请选择性输入'
                    },
                    {
                        title: '用户名：',
                        label: 'user',
                        type: 'input',
                        option: '',
                        val: '',
                        require: true,
                        placeholder: '请输入用户名',
                        remark: '请输入用户名'
                    },
                    {
                        title: '密码：',
                        label: 'pwd',
                        type: 'input',
                        option: '',
                        val: '',
                        require: true,
                        placeholder: '请输入密码',
                        remark: '请输入密码'
                    },
                    {
                        title: '密码确认：',
                        label: 'pwdConfirm',
                        type: 'input',
                        option: '',
                        val: '',
                        require: true,
                        placeholder: '请再次输入密码',
                        remark: '请再次输入密码'
                    }
                ],
                dataForm: {
                    provinces: '',
                    city: '',
                    name: '',
                    address: '',
                    phone: '',
                    code: '',
                    contacts: '',
                    phoneNum: '',
                    email: '',
                    user: '',
                    pwd: '',
                    pwdConfirm: '',
                }
            }
        },
        methods: {
            next() {
                let flag = false
                for (let i = 0; i <this.formList.length ; i++) {
                    if (this.formList[i].require && !this.formList[i].val){
                        this.$message.warning(this.formList[i].remark)
                        flag = true
                        break
                    }
                }
                for (let key in this.dataForm) {
                    this.formList.forEach(item=> {
                        if (key == item.label){
                            this.dataForm[key] = item.val
                        }
                    })
                }
                console.log(this.dataForm)
            },
            init() {
                this.isShow = true
            },
            close() {
                this.isShow = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .entering {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;

        .enterContent {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            position: relative;
            width: 1000px;
            height: 850px;
            background: rgba(2, 56, 152, 0.6);
            border: 1px solid #1A8BFF;
            border-radius: 10px;

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
                color: #1ADCFF;
                line-height: 80px;
                text-align: center;

                .titleLine {
                    width: 100%;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-45%);
                }
            }

            .enterFrom {
                width: 100%;
                box-sizing: border-box;
                padding: 20px 45px;

                .enterItem {
                    display: flex;
                    align-items: center;
                    margin-bottom: 17px;

                    .zd {
                        width: 11px;
                        height: 11px;
                    }

                    .itemName {
                        margin-left: 8px;
                        width: 120px;
                        font-size: 18px;
                        font-weight: 500;
                        color: #1ADCFF;
                        line-height: 20px;
                    }

                    .select {
                        display: flex;
                        align-items: center;
                        width: 288px;

                        ::v-deep .el-input__inner {
                            width: 100%;
                            height: 38px;
                            border: 1px solid #1489CC;
                            border-radius: 0px;
                            background: rgba(255, 255, 255, 0);
                            color: #ffffff;
                        }

                        .required {
                            width: 7px;
                            height: 6px;
                            margin-left: 5px;
                        }
                    }

                    .remark {
                        display: flex;
                        align-items: center;
                        margin-left: 120px;

                        .ts {
                            width: 23px;
                            height: 23px;
                            margin-right: 13px;
                        }

                        .ts_f {
                            font-size: 16px;
                            font-family: Source Han Sans CN;
                            font-weight: 400;
                            color: #1ADCFF;
                            line-height: 20px;
                        }
                    }
                }

                .btn-next {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 10px;
                }
            }
        }
    }
</style>
