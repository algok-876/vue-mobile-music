<template>
  <div class="thumbnail-cover">
    <div class="cover" @click="goto">
      <div class="bg" :style="{backgroundColor: backgroundColor}"></div>
      <img :src="coverUrl" alt="">
      <div class="play-count" v-if="playCount">
        <i class="iconfont icon-bofang"></i>
        <span>{{ figurePlayCount(playCount) }}</span>
      </div>
    </div>
  </div>  
</template>

<script>
import { figurePlayCount } from '@/utils/tools'
import { useRouter } from 'vue-router'
export default {
  props: {
    coverUrl: {
      type: String,
      required: true
    },
    to: {},
    backgroundColor: {
      type: String
    },
    playCount: {
      type: Number
    }
  },
  setup (props) {
    const router = useRouter()
    const goto = () => {
      router.push(props.to)
    }
    return {
      figurePlayCount,
      goto
    }
  }
}
</script>

<style lang="scss" scoped>
.thumbnail-cover{
  position: relative;
  .cover{
    position: relative;
    .bg{
      position: absolute;
      width: 100%;
      height: 100%;
      top: -9px;
      left: 0;
      z-index: -1;
      border-radius: 12px;
      background-color: rgb(241,242,235);
      transform: scale(0.9);
    }
    img{
      display: block;
      width: 100%;
      border-radius: 10px;
    }
    .play-count{
      position: absolute;
      display: flex;
      align-items: center;
      right: 4px;
      top: 4px;
      height: 20px;
      padding: 0 8px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, .3);
      color: #fff;
      font-size: 12px;
      i{
        font-size: 10px;
        display: inline-block;
        // margin-right: 2px;
      }
    }
  }
}
</style>