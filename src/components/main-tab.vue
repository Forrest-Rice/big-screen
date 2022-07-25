<template>
  <div class="tab-Wrap">
    <ul class="tabs">
      <li class="tabItem" :class="$route.path.indexOf(item.path) > -1 ? 'active' : ''" v-for="(item, index) in tabList"
        :key="index" @click="tab(item.path, index)">
        <img class="bg" :src="item.bg" alt="">
        <span class="name">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "main-tab",
  data () {
    return {
      tabList: [
        { name: '园区总览', path: '/home/pandect', bg: require('../assets/img/tab/yuanquzonglan@2x.png') },
        { name: '产业图鉴', path: '/home/enterprise', bg: require('../assets/img/tab/chanyetujian@2x.png') },
        { name: '企业画像', path: '', bg: require('../assets/img/tab/qiyetuxiang@2x.png') },
        { name: '亩均产值', path: '', bg: require('../assets/img/tab/mujunchanzhi@2x.png') },
        { name: '双碳监测', path: '/home/doubleCarbon', bg: require('../assets/img/tab/shuangtanjiance@2x.png') },
        { name: '舆情监控', path: '', bg: require('../assets/img/tab/yuqingjiankong@2x.png') }
      ]
    }
  },
  methods: {
    tab (path) {
      if (path) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style scoped lang="scss">
ul,
li {
  list-style: none
}

.tab-Wrap {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.tabs {
  display: flex;
  align-items: center;

  .tabItem {
    position: relative;
    cursor: pointer;
    width: 210px;
    height: 59px;
    font-size: 20px;
    font-weight: 400;
    color: #2E9EFF;
    line-height: 47px;
    text-align: center;
    margin: 0 18px;

    .bg {
      width: 100%;
      height: 100%;
    }

    .name {
      position: absolute;
      top: 12px;
      right: 45px;
    }

    //background: url("../assets/img/chanyetujian@2x.png") no-repeat;
    //background-size: 100% 100%;
  }

  .active {
    color: #ffffff;
    //background: url("../assets/img/yuanquzonglan@2x.png") no-repeat;
    //background-size: 100% 100%;
  }
}
</style>
