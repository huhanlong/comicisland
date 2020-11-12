<template>
 <section class="classify-list">
        <div class="list-item" v-for="item in list" :key="item.id">
          <div
            class="item-pic"
            :style="`background-image: url(${item.coverurl})`"
          ></div>
          <div class="item-info">
            <div class="info-book font-30">{{item.name}}</div>
            <div class="info-author font-26">作者：{{item.author}}</div>
            <div class="info-fans font-26">人气：{{item.view | formatYi}}</div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
  name: 'CartoonList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/mixins.scss";
.classify-list {
  .list-item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 124px;
    padding-left: 10px;
    @include border-bottom;
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
      .info-book, .info-author {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
