<template>
  <div class="page-Ranking">
    <normal-header title = '排行榜'></normal-header>
    <div class ='ranking-main'>
      <header-type :types = "types" @click = "onChange"></header-type>
      <cartoon-list :list = "cartoonList" :isRanking="true"></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
import { unformat } from '@/utils/apiHelp'
import { getRankList } from '@/api/cartoon'
export default {
  name: 'ranking',
  data () {
    return {
      types: [
        { id: 1, description: '热搜榜', ranktype: 6 },
        { id: 2, description: '人气榜', ranktype: 1 },
        { id: 3, description: '畅销榜', ranktype: 4 },
        { id: 4, description: '新书榜', ranktype: 2 },
        { id: 5, description: '完结榜', ranktype: 5 },
        { id: 6, description: '免费榜', ranktype: 3 }
      ],
      ranklist: []
    }
  },
  computed: {
    cartoonList () {
      return this.ranklist.map(item => {
        return {
          id: item.bigbookid,
          coverurl: item.coverurl,
          name: item.name,
          author: item.author,
          view: item.sales
        }
      })
    }
  },
  components: {
    NormalHeader,
    HeaderType,
    CartoonList
  },
  methods: {
    getRankList (ranktype) {
      getRankList(ranktype).then(res => {
        if (res.code === 200) {
          const result = JSON.parse(unformat(res.info))
          // console.log(result)
          this.ranklist = result.ranklist
        } else {
          console.log(res.code_msg)
        }
      })
    },
    onChange (payload) {
      this.getRankList(payload.data.ranktype)
    }
  },
  created () {
    this.getRankList(this.types[0].ranktype)
  }
}
</script>

<style lang="scss" scoped>
.page-Ranking {
  display: flex;
  flex-direction: column;
  height: 100%;

.ranking-main{
    flex: 1;
    overflow-y: auto;
  }
}
</style>
