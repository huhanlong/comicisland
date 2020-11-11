<template>
  <div class="page-home">
    <index-header></index-header>
    <div class="index-main">
      <Swiper class="my-swiper" v-if="bannerList.length > 0" :autoplay="3000">
        <SwiperItem v-for="item in bannerList" :key="item.id">
          <img :src="item.imageurl" alt />
        </SwiperItem>
      </Swiper>
      <index-nav></index-nav>
      <!-- 生成推荐的漫画数据 -->
      <index-recommend v-for = "item in recommentList" :key = "item.specialid" :info = "item"></index-recommend>
      <div class="my-icp">
        <a
          class="record"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202006214"
          target="_blank"
        >
          <img
            class="img"
            src="https://wechatapp.zhuishushenqi.com/mhd/201711/gongan.jpg"
          />
          <div>沪公网安备 31011202006214号</div>
        </a>
        <div class="licence">
          增值电信业务经营许可证沪B2-20170022
          <br />网络文化经营许可证沪网文（2016）3206-227号
          <br />出版物经营许可证新出发沪批字第U7659号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入抽离出来的插件
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getBanner, getIndexRecomment } from '@/api/cartoon'
// 引入抽离出来的组件
import indexHeader from './components/indexHeader'
import indexNav from './components/indexNav'
import indexRecommend from './components/indexRecommend'

export default {
  name: 'Home',
  data () {
    /*
      需要一个数据，考虑哪些点？
        1. 数据存放在哪里： data? props? computed? state? getter?
        2. 数据格式 string? object ? number? array? ...
    */
    return {
      bannerList: [],
      recommentList: []
    }
  },
  components: {
    Swiper,
    SwiperItem,
    indexHeader,
    indexNav,
    indexRecommend
  },
  methods: {
    changeHandler (payload) {
      console.log('index', payload)
    },
    getBanner () {
      // 下载轮播图的数据
      getBanner()
        .then(res => {
          // 漫画岛 的每一个接口 都有 code 的字段
          // 如果字段是 200 的话，这个接口是ok
          if (res.code === 200) {
            this.bannerList = res.info
          } else {
            // 不ok，就在页面上报错
            // 在这里我们先通过 alert 进行报错，后期 我们可以用一下 vant 组件库的组件
            alert(res.code_msg)
          }
        })
        .catch(err => {
          alert('网络异常，请稍后：' + err)
        })
    },
    getIndexRecomment () {
      getIndexRecomment()
        .then(res => {
          if (res.code === 200) {
            this.recommentList = res.info
          } else {
            // 不ok，就在页面上报错
            // 在这里我们先通过 alert 进行报错，后期 我们可以用一下 vant 组件库的组件
            alert(res.code_msg)
          }
        })
        .catch(err => {
          alert('网络异常，请稍后：' + err)
        })
    }
  },
  created () {
    // 获取首页轮播图的数据
    this.getBanner()

    // 获取首页推荐漫画的数据
    this.getIndexRecomment()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixins.scss";
.page-home {
  .index-main {
    flex: 1;
    overflow-y: auto;
  }
  .my-swiper {
    img {
      width: 100%;
    }
  }
  display: flex;
  flex-direction: column;
  height: 100%;

  .my-icp {
    padding: 5px 0;
    font-size: 12px;
    .record {
      display: flex;
      align-items: center;
      justify-content: center;
      .img {
        width: 15px;
        height: 15px;
        margin-right: 4px;
      }
    }
    .licence {
      margin-top: 4px;
      text-align: center;
    }
  }
}
</style>
