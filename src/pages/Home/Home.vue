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
                <thumbnail
                  :cover-url="songList.picUrl"
                  :play-count="songList.playCount"
                  :to="{name: 'SongList', params: {id: songList.id}}"
                  background-color="#cecece"
                ></thumbnail>
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
import SectionContainer from '@/components/SectionContainer.vue'
import SwiperCore, {Autoplay,Pagination} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/vue';
import Thumbnail from '@/components/Thumbnail.vue'
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
    }

    loadData()
    return {
      ...toRefs(state)
    }
  },
  components: {
    SectionContainer,
    Swiper,
    SwiperSlide,
    Thumbnail
  }
}
</script>

<style lang="scss">
.header{
  display: flex;
  height: 45px;
  align-items: center;
  background-color: #f3f3f3;
  .icon-wrapper{
    flex: 1;
    text-align: center;
    i{
      font-size: 28px;
      color: #2e2e2e;
    }
  }
  .search{
    box-sizing: border-box;
    width: 75%;
    height: 30px;
    background-color: #fff;
    border-radius: 15px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    i{
      font-size: 18px;
    }
  }
}
.main{
  .gap{
    margin: 15px;
  }
  .banner{
    .swiper-banner{
      border-radius: 15px;
      .van-swipe__indicator{
        width: 16px;
        height: 4px;
        border-radius: 2px;
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
  // margin: 5px 0;
  .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    .top{
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background-color: rgb(255,240,236);
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        color: rgb(245,63,62);
        font-size: 24px;
      }
    }
    span{
      font-size: 14px;
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
  .name{
    font-size: 14px;
    text-align: justify;
    margin-top: 8px;
    height: 38px;
    overflow: hidden;
  }
}

</style>