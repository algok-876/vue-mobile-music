<template>
  <div class="home">
    <header class="header">
      <div class="icon-wrapper">
        <i class="iconfont icon-liebiao"></i>
      </div>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="icon-wrapper">
        <i class="iconfont icon-huatong"></i>
      </div>
    </header>
    <main class="main">
      <div class="banner">
        <van-swipe class="swiper-banner" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="banner in banners" :key="banner.targetId">
            <img :src="banner.imageUrl" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
    </main>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import getBanner from './getBanner'

export default {
  setup () {
    const state = reactive({
      banners: []
    })
    
    const loadData = async () => {
      state.banners = await getBanner()
    }

    loadData()
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  height: 100px;
  align-items: center;
  background-color: #f3f3f3;
  .icon-wrapper{
    flex: 1;
    text-align: center;
    i{
      font-size: 54px;
      color: #2e2e2e;
    }
  }
  .search{
    box-sizing: border-box;
    width: 75%;
    height: 70px;
    background-color: #fff;
    border-radius: 35px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    i{
      font-size: 36px;
    }
  }
}
.main{
  padding: 30px;
  .banner{
    .swiper-banner{
      border-radius: 15px;
    }
    img{
      width: 100%;
      display: block;
    }
  }
}

</style>