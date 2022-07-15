<template>
  <div class="home">
    <div class="bg-img-pannel"></div>
    <publicHeader></publicHeader>
    <main-tab></main-tab>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import publicHeader from "../components/public-header";
import MainTab from "../components/main-tab";
export default {
name: "home",
  components: {
    MainTab,
    publicHeader
  },
  data(){
    return{

    }
  },
  mounted() {
  },
  methods:{


}
}
</script>

<style scoped lang="scss">
  .home{
    width: 100%;
    height: 100%;
    .bg-img-pannel{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: url("../assets/img/beijin@2x.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .container{
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
