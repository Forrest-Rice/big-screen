<!--
 * @Author: By
 * @Date: 2022-07-18 11:15:49
 * @LastEditTime: 2022-07-25 14:37:32
 * @LastEditors: By
 * @Description: 
 * @FilePath: \big-screen\src\views\home.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div class="home">
    <div class="bg-img-pannel"></div>
    <publicHeader></publicHeader>
    <main-tab></main-tab>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainTab from "../components/main-tab";
import publicHeader from "../components/public-header";
export default {
  name: "home",
  components: {
    MainTab,
    publicHeader
  },
  data () { return {} },
  mounted () { },
  methods: {}
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;

  .bg-img-pannel {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/img/beijin@2x.jpg") no-repeat;
    background-size: 100% 100%;
  }

  .container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 212px 20px 0;
  }
}
</style>
