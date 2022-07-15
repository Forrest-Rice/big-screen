<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  created() {

    var w=document.documentElement.clientWidth;
    if(w > 1200 ){
      this.$store.commit('SET_SIZE', 14);
    }else {
      this.$store.commit('SET_SIZE', 8);
    }
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss">
ul,li{list-style: none}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
