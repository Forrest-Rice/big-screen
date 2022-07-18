<!--
 * @Author: By
 * @Date: 2022-07-18 19:23:50
 * @LastEditTime: 2022-07-18 20:23:22
 * @LastEditors: By
 * @Description: 提交成功弹窗组件
 * @FilePath: \big-screen\src\views\login\module\submitSucceed.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="submit-succeed-box" v-if="dialogVisible">
        <div class="enterContent">
            <header>
                <el-image class="close-btn" @click="close" :src="closeImage" fit="cover"></el-image>
            </header>
            <main></main>
            <footer></footer>
        </div>

    </div>
</template>

<script>
export default {
    name: 'submitSucceed',
    data () {
        return {
            dialogVisible: false,
            closeImage: require('@/assets/img/pop-close.png'),
        }
    },
    methods: {
        init () {
            this.dialogVisible = true
        },
        close () {
            this.dialogVisible = true
        }
    }
}

</script>
<style lang="scss" scoped>
.submit-succeed-box {
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

        header{
            display: flex;
            
        }
    }
}
</style>