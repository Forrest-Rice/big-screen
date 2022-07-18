<!--
 * @Author: By
 * @Date: 2022-07-18 14:38:29
 * @LastEditTime: 2022-07-18 15:46:19
 * @LastEditors: By
 * @Description: 
 * @FilePath: \big-screen\src\views\login\module\deleteMetrics.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="entryMetrics-box" v-if="dialogVisible">
        <div class="enterContent">
            <header>
                <span class="header-title">删除指标</span>
                <el-image class="close-btn" @click="close" :src="closeImage" fit="cover"></el-image>
            </header>
            <main>
                <el-form class="metrics-form" ref="form" :model="form">
                    <el-form-item label="指标名称">
                        <el-input v-model="form.metricsName"></el-input>
                    </el-form-item>
                    <el-form-item label="指标数据">
                        <el-input v-model="form.metricsValue"></el-input>
                    </el-form-item>
                    <el-form-item label="指标数据">
                        <el-input v-model="form.metricsUnit"></el-input>
                    </el-form-item>
                </el-form>
            </main>
            <footer>
                <el-button @click="conformFun" class="confirm-button">确认</el-button>
                <el-button @click="cancelFun" class="cancel-button">取消</el-button>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    name: 'addMetrics',
    data () {
        return {
            dialogVisible: false,
            closeImage: require('@/assets/img/pop-close.png'),
            form: {
                metricsName: '',
                metricsUnit: '',
                metricsValue: ''
            }
        }
    },
    methods: {
        init () {
            this.dialogVisible = true
        },
        close () {
            this.dialogVisible = false
        },
        conformFun () {
            this.dialogVisible = false
        },
        cancelFun () {
            this.dialogVisible = false
        }
    }
}
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
    background: rgba(0, 0, 0, .6);
    z-index: 2000;

    .enterContent {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 480px;
        height: 384px;
        background: rgba(2, 56, 152, 0.6);
        border: 1px solid #1A8BFF;
        border-radius: 10px;
        padding: 16px 11px 26px 11px;

        header {
            width: 100%;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            .header-title {
                font-size: 24px;
                font-family: Source Han Sans CN;
                font-weight: 500;
                color: #05FFFF;
                line-height: 33px;
            }

            .close-btn {
                width: 48px;
                height: 48px;
                position: absolute;
                top: 0;
                right: 0;
            }
        }

        main {
            width: 100%;
            display: flex;
            justify-content: center;
            flex: 1;
            margin-top: 34px;

            ::v-deep .metrics-form {
                .el-form-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 27px;
                }

                .el-form-item__label {
                    font-size: 18px;
                    font-family: Source Han Sans CN;
                    font-weight: 500;
                    color: #1ADCFF;
                    line-height: 20px;
                }

                .el-input__inner {
                    width: 290px;
                    height: 42px;
                    border: 1px solid #1ADCFF;
                    border-radius: 0;
                }

            }
        }

        footer {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            ::v-deep .confirm-button {
                width: 160px;
                height: 44px;
                background: #1ADCFF;
                border-radius: 4px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;


                span {
                    font-size: 18px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #0A3D75;
                    line-height: 33px;
                }
            }

            ::v-deep .cancel-button {
                width: 160px;
                height: 44px;
                background: rgba(26, 220, 255, 0.5000);
                border-radius: 4px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    font-size: 18px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FEFEFF;
                    line-height: 33px;
                }
            }
        }
    }
}
</style>
