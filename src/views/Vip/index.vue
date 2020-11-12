<template>
  <div class="page-vip">
     <normal-header title = 'VIP'></normal-header>
    <div class = 'vip-main'>
      <cartoon-list :list = "list"></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import CartoonList from '@/components/CartoonList'
import { unformat } from '@/utils/apiHelp'
import { getVIPList } from '@/api/cartoon'
export default {
  name: 'Vip',
  components: {
    NormalHeader,
    CartoonList
  },
  data () {
    return {
      vipList: []
    }
  },
  computed: {
    list () {
      return this.vipList.map(item => {
        return {
          id: item.bigbook_id,
          coverurl: item.coverurl,
          name: item.bigbook_name,
          author: item.bigbook_author,
          view: item.bigbookview
        }
      })
    }
  },
  methods: {
    getVIPList () {
      getVIPList().then(res => {
        if (res.code === 200) {
          const result = JSON.parse(unformat(res.info))
          // console.log(result)
          this.vipList = result.comicsList
        } else {
          console.log(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    }
  },
  created () {
    this.getVIPList()
  }
}
</script>

<style lang="scss" scoped>
.page-vip {
  display: flex;
  flex-direction: column;
  height: 100%;

  .vip-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
