<template>
  <div class="scan">
      <div class="scanTitle">微信扫码登录</div>
      <div class="code">
        <img src="../../../assets/img/code.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
name: "scan"
}
</script>

<style scoped lang="scss">
.scan{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.scanTitle{
  font-size: 24px;
  font-weight: 400;
  color: #05FFFF;
}
.code{
  margin-top: 69px;
  width: 243px;
  height: 243px;
  box-sizing: border-box;
  padding: 17px;
  border: 1px solid #1ADCFF;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
