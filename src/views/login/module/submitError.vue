<!--
 * @Author: By
 * @Date: 2022-07-18 15:51:39
 * @LastEditTime: 2022-07-18 19:21:27
 * @LastEditors: By
 * @Description: 
 * @FilePath: \big-screen\src\views\login\module\submitError.Vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="submit-error" v-if="dialogVisible">
        <div class="enterContent">
            <header>
                <el-image class="close-btn" @click="close" :src="closeImage" fit="cover"></el-image>
            </header>
            <main>
                <div class="main-content" v-for="(item, index) in optionList" :key="index">
                    <div class="content-item" v-for="(contentItem, contentIndex) in item" :key="contentIndex">
                        <span>{{ contentItem.label }}</span>
                        <!-- <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image> -->
                        <i v-if="contentItem.value" class="el-icon-check"></i>
                        <i v-else class="el-icon-close"></i>
                    </div>
                </div>
            </main>
            <footer>
                <el-button @click="goBack" class="footer-button" type="primary">返回修改</el-button>
            </footer>
        </div>
    </div>
</template>
<script>
export default {
    name: 'submitError',
    data () {
        return {
            closeImage: require('@/assets/img/pop-close.png'),
            dialogVisible: false,
            optionList: [
                [{ label: 'aa1111a', value: true }, { label: 'bb1111', value: false }],
                [{ label: 'aa222a', value: true }, { label: 'bb2222b', value: false }]
            ],
        }
    },
    methods: {
        close () {
            this.dialogVisible = false
        },
        init () {
            this.dialogVisible = true
        },
        /**
         * @description: 返回修改方法
         * @return {*}
         */
        goBack () {
            this.$emit('goBack')
            this.dialogVisible = false
        }
    }

}
</script>

<style lang="scss" scoped>
.submit-error {
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
        width: 801px;
        height: 701px;
        background: rgba(2, 56, 152, 0.6);
        border: 1px solid #1A8BFF;
        border-radius: 10px;
        padding: 22px 20px;

        header {
            width: 100%;
            height: 58px;
            position: relative;

            .close-btn {
                width: 58px;
                height: 58px;
                position: absolute;
                top: 0;
                right: 0;
            }
        }

        main {
            width: 100%;
            flex: 1;

            .main-content {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 17px 0;

                &:first-child {
                    margin-top: 0;
                }

                &:last-child {
                    margin-bottom: 0;
                }

                .content-item {
                    display: flex;
                    align-items: center;
                    width: 150px;

                    &:first-child {
                        margin-left: 120px;
                    }

                    &:last-child {
                        margin-right: 120px;
                    }

                    span {
                        font-size: 16px;
                        font-family: Source Han Sans CN;
                        font-weight: 500;
                        color: #1ADCFF;
                        line-height: 20px;
                    }

                    i {
                        font-size: 22px;
                        color: #1ADCFF;
                        margin-left: 10px;
                    }
                }
            }
        }

        footer {
            width: 100;

            ::v-deep .footer-button {
                width: 140px;
                height: 48px;
                background: #1ADCFF;
                border-radius: 4px;
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    width: 95px;
                    height: 23px;
                    font-size: 24px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #02389B;
                }
            }
        }
    }
}
</style>