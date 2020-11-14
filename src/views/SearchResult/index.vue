<template>
  <div class="page-search-result">
    <normal-header :title = '$route.query.name' :showRight='false'></normal-header>

    <div class="search-result-main">
      <section class="cartoon-list search-result-list">
        <div class="list-item" v-for="item in cartoonList" :key="item.id">
          <div
            class="item-pic"
            v-lazy:background-image="item.coverurl"
          ></div>
          <div class="item-info">
            <div class="info-book font-30">{{item.name}}</div>
            <div class="info-author font-26">作者：{{item.author}}</div>
            <div class="info-fans font-26">更新：{{item.lastpartname}}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { searchResult } from '@/api/cartoon'
import NormalHeader from '@/components/NormalHeader'
export default {
  name: 'SearchResult',
  data () {
    return {
      cartoonList: []
    }
  },
  components: {
    NormalHeader
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    searchResult () {
      searchResult(this.$route.query.name).then(res => {
        if (res.code === 200) {
          this.cartoonList = res.info
          console.log(res.info)
        } else {
          console.log(res.code.msg)
        }
      })
    }
  },
  created () {
    this.searchResult()
  }
}
</script>

<style lang="scss" scoped>
.page-search-result {
  display: flex;
  flex-direction: column;
  height: 100%;

  .search-result-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>

<style lang="scss">
.header-normal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid #dbd9dc;
  .header-back {
    position: absolute;
    top: 50%;
    left: 12px;
    margin-top: -7px;
    width: 24px;
    height: 14px;
    background: url("../../assets/icon/header-back.png") no-repeat;
    background-size: 100%;
  }
  .header-title {
    max-width: 70%;
    color: #333;
    font-weight: 500;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .header-search {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 50%;
    right: 12px;
    margin-top: -11px;
    background: url("../../assets/icon/header-search.png") no-repeat;
    background-size: 100%;
  }
}

.header-type {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  border-bottom: 1px solid #dbd9dc;
  .item {
    width: 20%;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #000;
    &.active {
      color: #e7370c;
    }
  }
}

.cartoon-list {
  .list-item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 124px;
    padding-left: 10px;
    border-bottom: 1px solid #dbd9dc;
    position: relative;
    .item-pic {
      flex-shrink: 0;
      width: 80px;
      height: 106px;
      border-radius: 3px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;
    }
    .item-info {
      flex: 1;
      margin-left: 10px;
      color: #999;
      overflow: hidden;
      .info-book,
      .info-author,
      .info-fans {
        font-weight: 500;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .info-book {
        color: #333;
      }
      .info-book,
      .info-author {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
