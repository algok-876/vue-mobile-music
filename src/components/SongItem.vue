<template>
  <div class="song-item">
    <div class="left" v-if="order">
      {{ order }}
    </div>
    <div class="center">
      <p class="name van-ellipsis">{{songName}}</p>
      <span class="info van-ellipsis">{{singer}} - {{album}}</span>
    </div>
    <div class="right">
      <span><i class="iconfont icon-shipin"></i></span>
      <span><i class="iconfont icon-gengduo"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Number
    },
    songName: {
      type: String,
      default: '歌曲名称'
    },
    singer: {
      type: String,
      default: '歌手名字'
    },
    album: {
      type: String,
      default: '歌手名字'
    }
  }
}
</script>

<style lang="scss" scoped>
.song-item{
  display: flex;
  align-items: center;
  .left{
    width: 40px;
    color: $text-color-gray-2;
    font-size: 14px;
  }
  .center{
    flex: 1;
    color: $text-color-gray-5;
    .name{
      width: 230px;
      margin: 0;
      font-size: 16px;
    }
    .info{
      display: inline-block;
      width: 170px;
      font-size: 14px;
      color: $text-color-gray-2;
    }
  }
  .right{
    width: 55px;
    display: flex;
    justify-content: space-between;
    i{
      font-size: 18px;
      color: $text-color-gray-2;
    }
  }
}
</style>
