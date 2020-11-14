<template>
  <div class = 'page-city'>
    <normal-header :title = "`城市 - ${curCityName}`" :showRight = 'false'></normal-header>
    <div class = 'city-main'>
      <div class = 'left' ref = 'scrollLeft'>
        <div
          class = 'city-index-section'
          v-for = 'item in cityList'
          :key = "item.py"
          :ref = "`section-${item.py}`"
          >
          <p>{{ item.py }}</p>
          <ul>
            <li
              v-for = "city in item.list"
              :key = 'city.cityId'
              @click = "changeCity(city)"
              >{{ city.name }}</li>
          </ul>
        </div>
      </div>
      <div class = 'right'>
        <ul>
          <li v-for = 'item in indexs' :key = 'item' @click = "handleClick(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import NormalHeader from '@/components/NormalHeader'
import { getCityList } from '@/api/city'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'City',
  data () {
    return {
      cities: []
    }
  },
  /*
    [
      {
        py: "A",
        list: [
          {
            阿拉善盟
          },
          {
            阿里巴巴
          }
        ]
      },
      {
        py: "B",
        list: [
          {
            北京
          },
          {
            保定
          }
        ]
      }
    ]
  */
  computed: {
    ...mapGetters('city', ['curCityName']),
    cityList () {
      // 最终结果的收集
      const result = []
      this.cities.forEach(item => {
        // 获取当前城市的首字母
        const py = item.pinyin.substr(0, 1).toUpperCase()
        // 判断py 是否已经在 result 中存在，如果存在这个 py 找到 result 中的下标
        const index = result.findIndex(item => item.py === py)
        if (index > -1) {
          // 存在
          result[index].list.push(item)
        } else {
          // 不存在
          result.push({
            py,
            list: [item]
          })
        }
      })
      return result.sort((a, b) => a.py.charCodeAt() - b.py.charCodeAt())
    },
    indexs () {
      return this.cityList.map(item => item.py)
    }
  },
  components: {
    NormalHeader
  },
  methods: {
    ...mapMutations('city', ['SET_CURCITY']),
    getCityList () {
      getCityList().then(res => {
        this.cities = res.data.data.cities
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    },
    handleClick (py) {
      /*
        ref 标记
        1、ref 标记真实 dom节点，拿到的就是该节点的DOM元素
        2、ref 标记自定义组件，拿到的是这个自定义组件的示例对象 var vm = new Vue({el: "#app"}) vm.$el
           要拿到这个组件的根节点  this.$refs.xxx.$el 真实dom
        3. ref 标记 v-for 的组件里，那么会将标的真实dom放在 一个数组
      */
      // console.log(this.$refs.scrollLeft)
      // console.log(this.$refs[`section-${py}`][0].offsetTop)
      const target = this.$refs[`section-${py}`][0]
      // 修改左侧滚动元素scrollTop 值
      this.$refs.scrollLeft.scrollTop = target.offsetTop
    },
    changeCity (city) {
      this.SET_CURCITY(city)
      // 设置完vuex 以后，再去跳转到首页
      this.$router.push('/')
    }
  },
  created () {
    this.getCityList()
  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/mixins.scss';
.page-city{
  display: flex;
  flex-direction: column;
  height: 100%;
  .city-main {
    flex: 1;
    overflow: hidden;
    display: flex;
  }
  .left{
    flex: 1;
    height: 100%;
    overflow-y: auto;
    position: relative;
    .city-index-section{
      @include border-bottom;
      padding-left: 15px;
      p{
        @include border-bottom;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
      }
      li{
        @include border-bottom;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 16px;
      }
    }
  }
  .right{
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    li{
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
