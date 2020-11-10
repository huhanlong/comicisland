<template>
  <div class="page-home">
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
     <Swiper ref = 'xxx'>
      <SwiperItem>1</SwiperItem>
      <SwiperItem>2</SwiperItem>
      <SwiperItem>3</SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getBanner } from '@/api/cartoon'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    changeHandler (payload) {
      console.log('index', payload)
    }
  },
  created () {
    // 下载轮播图的数据
    getBanner().then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/mixins.scss";
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-header {
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
}
</style>
