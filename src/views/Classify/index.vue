<template>
  <div class="page-classify">
    <normal-header title = '分类'></normal-header>
    <div class = 'classify-main'>
      <header-type :types = "types" @click = "onChange"></header-type>
      <cartoon-list :list = "list"></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
import { getTypes, getTypesList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHelp'

export default {
  name: 'Classify',
  components: {
    NormalHeader,
    HeaderType,
    CartoonList
  },
  data () {
    return {
      types: [],
      cartoonList: []
    }
  },
  computed: {
    list () {
      return this.cartoonList.map(item => {
        return {
          id: item.bigbook_id,
          name: item.bigbook_name,
          author: item.bigbook_author,
          coverurl: item.bigcoverurl,
          view: item.bigbookview
        }
      })
    }
  },
  methods: {
    onChange (payload) {
      // console.log(payload) data 当前分类的所有数据
      this.getTypesList(payload.data.targetargument)
    },
    getTypes () {
      return getTypes().then(res => {
        if (res.code === 200) {
          this.types = res.info
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    },
    getTypesList (subject) {
      getTypesList(subject).then(res => {
        if (res.code === 200) {
          this.cartoonList = JSON.parse(unformat(res.info)).comicsList
        } else {
          console.log(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    }
  },
  async created () {
    // A 和 B 两个请求中，B 的数据必须等 A 下载完毕以后，才能够得到第一个热血的分类，才能去下载
    await this.getTypes()
    this.getTypesList(this.types[0].targetargument)
  }
}
</script>

<style lang="scss" scoped>
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100%;

  .classify-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
