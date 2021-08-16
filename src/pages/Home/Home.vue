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
      <div class="banner gap">
        <van-swipe class="swiper-banner" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="banner in banners" :key="banner.targetId">
            <img :src="banner.pic" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>

      <ul class="tab-menu gap">
        <li class="item">
          <div class="top">
            <i class="iconfont icon-rili"></i>
          </div>
          <span>每日推荐</span>
        </li>
        <li class="item">
          <div class="top">
            <i class="iconfont icon-FM"></i>
          </div>
          <span>私人FM</span>
        </li>
        <li class="item">
          <div class="top">
            <i class="iconfont icon-gedan"></i>
          </div>
          <span>歌单</span>
        </li>
        <li class="item">
          <div class="top">
            <i class="iconfont icon-paihangbang"></i>
          </div>
          <span>排行榜</span>
        </li>
        <li class="item">
          <div class="top">
            <i class="iconfont icon-rili"></i>
          </div>
          <span>每日推荐</span>
        </li>
      </ul>

      <section-container
        title="推荐歌单"
      >
        <div class="song-list">
          <swiper
            :loop="false"
            :speed="800"
            :slidesPerView="3.4"
            :spaceBetween="10"
            :slidesOffsetBefore="16"
            class="swiper-song-list"
          >
            <swiper-slide v-for="songList in recommendSongList" :key="songList.id" class="swiper-item">
              <div class="song-list-item">
                <div class="cover">
                  <img :src="songList.picUrl" alt="">
                  <div class="play-count">
                    <i class="iconfont icon-bofang"></i>
                    <span>{{ playCount(songList.playCount) }}</span>
                  </div>
                </div>
                <p class="name">{{ songList.name }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section-container>
      
    </main>
  </div>
</template>

<script>
import { computed, reactive, ref, toRefs } from 'vue'
import { useStore } from 'vuex'
import { getBanner, getSongList } from './data'
import { playCount } from '@/utils/tools'
import SectionContainer from '@/components/SectionContainer.vue'
import SwiperCore, {Autoplay,Pagination} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/vue';
SwiperCore.use([Autoplay,Pagination]);

export default {
  setup () {
    const state = reactive({
      banners: [],
      // 推荐歌单
      recommendSongList: []
    })
    
    const loadData = async () => {
      state.banners = await getBanner()
      state.recommendSongList = await getSongList()
      console.log(state.recommendSongList)
    }

    loadData()
    return {
      ...toRefs(state),
      playCount
    }
  },
  components: {
    SectionContainer,
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss">
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
  .gap{
    margin: 30px;
  }
  .banner{
    .swiper-banner{
      border-radius: 15px;
      .van-swipe__indicator{
        width: 28px;
        height: 8px;
        border-radius: 4px;
      }
    }
    img{
      width: 100%;
      display: block;
    }
  }
}
.tab-menu{
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  .item{
    .top{
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background-color: rgb(255,240,236);
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        color: rgb(245,63,62);
        font-size: 38px;
      }
    }
    span{
      font-size: 26px;
      letter-spacing: 1px;
      display: block;
      margin-top: 10px;
      text-align: center;
    }
  }
}
.song-list{
  .swiper-song-list{
    padding-top: 20px;
  }
}
.song-list-item{
  .cover{
    position: relative;
    &::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: -20px;
      left: 0;
      z-index: -1;
      border-radius: 17px;
      background-color: rgb(241,242,235);
      transform: scale(0.9);
    }
    img{
      display: block;
      width: 100%;
      border-radius: 15px;
    }
    .play-count{
      position: absolute;
      display: flex;
      align-items: center;
      right: 10px;
      top: 10px;
      height: 42px;
      padding: 0 16px;
      border-radius: 21px;
      background-color: rgba(0, 0, 0, .2);
      color: #fff;
      font-size: 14px;
      i{
        font-size: 14px;
        display: inline-block;
        margin-right: 5px;
      }
    }
  }
  .name{
    font-size: 26px;
    text-align: justify;
    margin-top: 8px;
    height: 68px;
    overflow: hidden;
  }
}

</style>