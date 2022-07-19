<!--
 * @Author: By
 * @Date: 2022-07-20 01:20:35
 * @LastEditTime: 2022-07-20 01:27:50
 * @LastEditors: By
 * @Description: 保存结果
 * @FilePath: \big-screen\src\views\login\module\saveSults.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->

<template>
    <div class="save-results-box" v-if="dialogVisible">
        <div class="enterContent">
            <header>
                <el-image class="close-btn" @click="close" :src="closeImage" fit="cover"></el-image>
            </header>
            <main>
                <span v-if="results" class="main-span">保存成功</span>
                <span v-if="!results" class="main-span">保存失败</span>
            </main>
            <footer>
                <el-button class="confirm-button" @click="confirm" type="primary">确认</el-button>
            </footer>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            results: false,
            dialogVisible: false
        }
    },
    methods: {
        init(flag) {
            this.results = flag
            this.dialogVisible = true
        },
        close() {
            this.dialogVisible = false
        },
        confirm() {

            this.dialogVisible = false
        }
    }
}
</script>
<style lang="scss" scoped>
.save-results-box {
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
        height: 244px;
        background: rgba(2, 56, 152, 0.6);
        border: 1px solid #1A8BFF;
        border-radius: 10px;
        padding: 22px 20px;

        header {
            width: 100%;
            display: flex;
            position: relative;

            ::v-deep .close-btn {
                width: 48px;
                height: 48px;
                position: absolute;
                top: 0;
                right: 0;
                cursor: pointer;
            }
        }

        main {
            flex: 1;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .main-span {
                font-size: 24px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #05FFFF;
                line-height: 33px;
            }
        }

        footer {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            ::v-deep .confirm-button {
                width: 317px;
                height: 44px;
                background: #1ADCFF;
                border-radius: 4px;
                display: flex;
                justify-content: center;
                align-items: center;

                span {
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