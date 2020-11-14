<template>
  <section
    class="index-recommend"
  >
    <div class="recommend-divide"></div>
    <div class="recommend-title">
      <div class="title-group">
        <img class="title-icon" v-lazy="info.icon" />
        <span class="title-text font-36">{{ info.name }}</span>
      </div>
      <span class="title-more font-24">更多 &gt;</span>
    </div>
    <div v-if="info.comicsviewtype === 1" :class="`recommend-type-1`">
      <div
        class="item"
        v-for="childItem in info.comicslist"
        :key="childItem.bigbook_id"
      >
        <img
          class="item-pic"
          v-lazy="childItem.extension && JSON.parse(childItem.extension).xsyzfx"
        />
        <p class="item-name font-28">{{ childItem.bigbook_name }}</p>
        <p class="item-text font-24">
          {{
            childItem.extension &&
              JSON.parse(childItem.extension).recommendwords
          }}
        </p>
      </div>
    </div>
    <div v-if="info.comicsviewtype === 5" :class="`recommend-type-5`">
      <div
        class="item"
        v-for="childItem in info.comicslist"
        :key="childItem.bigbook_id"
      >
        <img class="item-pic" v-lazy="childItem.coverurl" />
        <p class="item-name font-28">{{ childItem.bigbook_name }}</p>
        <p class="item-text font-24">{{ childItem.key_name }}</p>
      </div>
    </div>
    <div v-if="info.comicsviewtype === 3" :class="`recommend-type-3`">
      <div
        class="item"
        v-for="(childItem, childIndex) in info.comicslist"
        :key="childItem.bigbook_id"
      >
        <img
          class="item-pic"
          v-lazy="JSON.parse(childItem.extension).scfk344_202"
        />
        <div class="ranking-group">
          <div :class="`item-ranking item-ranking-${childIndex + 1}`"></div>
        </div>
        <div class="text-group">
          <p class="item-name font-30">{{ childItem.bigbook_name }}</p>
          <p class="item-hot font-24">
            人气：
            <span class="hot-hot">{{ childItem.bigbookview | formatYi | valueB }}</span>
          </p>
          <p class="item-text font-24">{{ childItem.brief }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'indexRecommend',
  props: {
    info: {
      type: Object,
      require: true
    }
  },
  filters: {
    formatYi (value) {
      var Yi = Math.pow(10, 8)
      if (value > Yi) {
        return `${(value / Yi).toFixed(2)}亿`
      } else {
        return `${(value / Math.pow(10, 4)).toFixed(2)}万`
      }
    },
    valueB (value) {
      return value
    }
  }
}
</script>

<style lang="scss" scoped>
.index-recommend {
  .recommend-divide {
    height: 10px;
    background-color: #f4f4f4;
  }
  .recommend-title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 20px;
    margin-bottom: 18px;
    .title-group {
      display: flex;
      align-items: center;
      .title-icon {
        width: 22px;
        height: 22px;
        margin-right: 5px;
      }
      .title-text {
        color: #3a3a3a;
        font-weight: 500;
      }
    }
    .title-more {
      color: #b0b0b0;
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .recommend-type-1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    .item {
      width: 174px;
      height: 218px;
      margin-bottom: 16px;
      .item-pic {
        width: 174px;
        height: 174px;
        margin-bottom: 4px;
        position: relative;
      }
      .item-name {
        max-width: 100%;
        margin-bottom: 2px;
        color: #3a3a3a;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .item-text {
        max-width: 100%;
        color: #8d8d8d;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  .recommend-type-3 {
    padding: 0 10px;
    box-sizing: border-box;
    .item {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 16px;
      position: relative;
      .item-pic {
        width: 154px;
        height: 90px;
      }
      .text-group {
        width: 158px;
        margin-left: 42px;
        .item-name {
          margin-bottom: 4px;
          color: #3a3a3a;
          font-weight: 500;
        }
        .item-hot {
          color: #b0b0b0;
          margin-bottom: 15px;
          .hot-hot {
            color: red;
          }
        }
        .item-text {
          color: #8d8d8d;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      .ranking-group {
        .item-ranking {
          width: 25px;
          height: 25px;
          background-repeat: no-repeat;
          background-position: top;
          background-size: 100%;
          position: absolute;
          top: 4px;
          left: 168px;
        }
        .item-ranking-other {
          width: 25px;
          height: 25px;
          background-repeat: no-repeat;
          background-position: top;
          background-size: 100%;
          position: absolute;
          top: 6px;
          left: 168px;
        }
        .item-ranking-1 {
          background-image: url("~@/assets/icon/rank-1.png");
        }
        .item-ranking-2 {
          background-image: url("~@/assets/icon/rank-2.png");
        }
        .item-ranking-3 {
          background-image: url("~@/assets/icon/rank-3.png");
        }
        .item-ranking-4 {
          background-image: url("~@/assets/icon/rank-4.png");
        }
        .item-ranking-5 {
          background-image: url("~@/assets/icon/rank-5.png");
        }
      }
    }
  }
  .recommend-type-5 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    .item {
      width: 112px;
      height: 218px;
      margin-bottom: 16px;
      .item-pic {
        width: 112px;
        height: 148px;
        margin-bottom: 4px;
      }
      .item-title {
        max-width: 100%;
        margin-bottom: 2px;
        color: #3a3a3a;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .item-text {
        max-width: 100%;
        color: #8d8d8d;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
</style>
