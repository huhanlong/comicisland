<template>
  <header class="index-header">
    <a href="mine.html?cpid=0">
      <div class="header-user">
        <div class="user-btn"></div>
      </div>
    </a>
    <div class="header-logo"></div>
    <a href="search.html?cpid=0">
      <div class="header-search"></div>
    </a>
  </header>
</template>

<script>
export default {
  name: 'indexHeader'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixins.scss";
.index-header {
  // border-bottom: 1px solid #ededed;;
  // position: relative;
  // &::after{
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   height: 1px;
  //   left: 0px;
  //   bottom: 0px;
  //   background: #ededed;
  //   transform: scaleY(0.5);
  // }
  @include border-bottom;
  display: flex;
  height: 44px;
  //三者等分平铺
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  .user-btn {
    width: 25px;
    height: 25px;
    background: url(~@/assets/icon/user-btn.png);
    background-size: 100%;
  }
  .header-logo {
    width: 92px;
    height: 28px;
    background: url(~@/assets/logo.png) no-repeat;
    background-size: 100%;
  }
  .header-search {
    width: 25px;
    height: 25px;
    background: url(~@/assets/icon/header-search.png);
    background-size: 100%;
  }
}
</style>
